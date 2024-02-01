import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../constants/colors'
import { CheckBox } from '@rneui/themed'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import formatDateTime from '../utils/helpers/formatDate'

export default function TaskDetail(props) {

    const task = props.task
    let { onPress } = props
    const naigation = useNavigation()
    const [status, setStatus] = useState(false)
    const [endDate, setEndDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [dateNow, setDateNow] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        setStartDate(moment(task.date_start).format('DD/MM/YYYY'))
        setEndDate(moment(task.date_end).format('DD/MM/YYYY'))
        setDateNow(moment(new Date()).format('DD/MM/YYYY'))
        task.status == 0 ? setStatus(false) : setStatus(true)
        setTitle('Task of ' + task.Event.name)
        setContent(task.content)
        setImg(task.Event.image)
    }, [])
    const isEventOver = endDate < dateNow

    const handShow = () => {
        naigation.navigate('ShowTaskDetail', { task })
    }

    const handleCompletion = () => {
        status == 0 ? (
            props.handleTaskCompleted(1, task.event_id, task.candidate_id)
        ) : (
            props.handleTaskCompleted(0, task.event_id, task.candidate_id)
        )

    }
    return (
        <TouchableOpacity style={[styles.container]} activeOpacity={0.6} onPress={handShow}>
            <View style={styles.khungImage}>
                {img ? (
                    <Image source={{ uri: img }} style={styles.image} />
                ) : (
                    <Image source={require('../assets/icons/ui-elements/user.png')} style={styles.image} />
                )}
            </View>
            <View style={styles.rightContent}>
                <View style={styles.top}>
                    <Text style={[styles.title, , isEventOver && styles.eventOverBackground]} numberOfLines={1}>
                        {title}
                    </Text>
                    <CheckBox
                        center
                        checked={status}
                        style={styles.checkBox}
                        // onPress={() => setStatus(!status)}
                        onPress={handleCompletion}
                        checkedColor={colors.primary}
                    />
                </View>
                <View style={[styles.bottom]}>
                    <Text style={styles.content} numberOfLines={2}>
                        {content}
                    </Text>
                    <Text style={styles.dateTime}>
                        {startDate} - {endDate}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        overflow: 'hidden',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -10,
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        color: colors.text,
        flex: 7,
    },
    checkBox: {
        color: colors.primary,
        padding: 0,
        margin: 0,
    },
    eventOverBackground: {
        color: 'red',
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 5,
        color: colors.subText,
        marginTop: -10,
    },
    dateTime: {
        color: colors.subText,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    khungImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
    },
    rightContent: {
        flex: 7,
    },
})
