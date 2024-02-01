import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { color } from '@rneui/themed/dist/config';
import colors from '../../constants/colors';

const ShowTaskDetail = ({ route }) => {
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [img, setImg] = useState('');
    const task = route.params.task

    useEffect(() => {
        setStartDate(moment(task.date_start).format('DD/MM/YYYY'));
        setEndDate(moment(task.date_end).format('DD/MM/YYYY'));
        setImg(task.Event.image);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.khungImage}>
                    {img ? (
                        <Image source={{ uri: img }} style={styles.image} />
                    ) : (
                        <Image source={require('../../assets/icons/ui-elements/user.png')} style={styles.image} />
                    )}
                </View>
                <View>
                    <Text style={styles.title}>{task.Event.name}</Text>
                </View>
                <View>
                    <Text style={styles.dateTime}>
                        {startDate} - {endDate}
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.body_lable}>Task to do</Text>
                <View style={styles.body_content}>
                    <Text style={styles.content_detail}>
                        {task.content}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ShowTaskDetail;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'column',
        paddingHorizontal: 30,
        // backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 200,
    },
    khungImage: {
        width: 150,
        height: 150,
        marginRight: 10,
        marginBottom: 10,
        // flex: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 5,
    },
    dateTime: {
        fontWeight: '500',
        fontSize: 16,
    },
    body: {
        marginTop: 30,
    },
    body_lable: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 20,
        color: colors.border,
    },
    body_content: {
        marginTop: 10,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    content_detail: {
        fontSize: 16,
        fontWeight: '500',
    },
});
