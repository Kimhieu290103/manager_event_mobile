import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { event as EventRepository } from '../../repositories'
import formatDateTime from '../../utils/helpers/formatDate'
import icons from '../../constants/icons'
import colors from '../../constants/colors'
import { startSpinner, spinValue, stopSpinner } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'
import { useNavigation } from '@react-navigation/native'

const EventDetail = (props) => {
    const [event, setEvent] = useState({})
    const [leader, setLeader] = useState({})
    const [departments, setDepartments] = useState([])
    const [showMembers, setShowMembers] = useState(false)
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [loading, setLoading] = useState(true)
    const {eventId, userId} = props.route.params

    useEffect(() => {
        startSpinner()

        EventRepository.getEventDetail(eventId)
            .then((responseEvent) => {
                setEvent(responseEvent.queryResult)
                setLeader(responseEvent.queryResult.User)
                setDepartments(responseEvent.queryResult.Departments)
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                setLoading(false)
                stopSpinner()
            })
    }, [])

    const toggleMembers = (departmentIndex) => {
        if (selectedDepartment === departmentIndex) {
            setShowMembers(false)
            setSelectedDepartment(null)
        } else {
            setShowMembers(true)
            setSelectedDepartment(departmentIndex)
        }
    }

    const navigation = useNavigation()

    const handleApply = () => {
        navigation.navigate('Question', {eventId: event.id, departments : departments, userId })
    }

    if(loading) {
        return (
            <Loading />
        )
    }


    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.contentContainer}>
                <View style={styles.infor}>
                    <Text style={styles.name}>{event.name}</Text>
                    <Text style={styles.slogan}>{event.slogan}</Text>
                    <Text style={{
                        backgroundColor: event.status == 0 ? colors.warning : event.status == 1 ? colors.success : colors.danger,
                        fontWeight: '700',
                        color: colors.white,
                        width: 90,
                        textAlign: 'center',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 16,
                        marginVertical: 10
                    }}>
                        {event.status == 0 ? 'Upcoming' : event.status == 1 ? 'On going' : 'Completed'}
                    </Text>
                </View>

                {/* Leader */}
                <Text style={styles.title}>Leader</Text>
                <View style={styles.item}>
                    <View style={styles.leader}>
                        <Image source={{ uri: leader.avatar }} style={styles.avatar} />
                        <View>
                            <Text style={styles.textInfor}><Text style={styles.subTitle}>Name: </Text>{leader.name}</Text>
                            <Text style={styles.textInfor}><Text style={styles.subTitle}>Email: </Text>{leader.gmail}</Text>
                            <Text style={styles.textInfor}><Text style={styles.subTitle}>Phone: </Text>{leader.telephone}</Text>
                            <Text style={styles.textInfor}><Text style={styles.subTitle}>University: </Text>{leader.university}</Text>
                        </View>
                    </View>
                </View>

                {/* Date time */}
                <Text style={styles.title}>Date</Text>
                <View style={styles.item}>
                    <Text style={[styles.textInfor, styles.p]}>{formatDateTime(event.date_start)} - {formatDateTime(event.date_end)}</Text>
                </View>

                {/* Location */}
                <Text style={styles.title}>Location</Text>
                <View style={styles.item}>
                    <Text style={[styles.textInfor, styles.p]}>{event.location}</Text>
                </View>

                {/* Description */}
                <Text style={styles.title}>Description</Text>
                <View style={styles.item}>
                    <Text style={[styles.textInfor, styles.p]}>{event.description}</Text>
                </View>

                {/* Department */}
                {departments.map((department, index) => (
                    <View key={index} style={styles.item}>
                        <TouchableOpacity onPress={() => toggleMembers(index)}>
                            <Text style={styles.title}>{department.name}</Text>
                            <Text style={[styles.textInfor, styles.p]}>{department.description}</Text>
                            <Text
                                style={{
                                    fontWeight: '500',
                                    color: colors.secondary,
                                    textAlign: 'right',
                                    marginBottom: 10,
                                }}
                            >
                                {showMembers && selectedDepartment === index ? 'Hide members' : 'Members have joined'}
                            </Text>
                        </TouchableOpacity>

                        {/* Render members in the department */}
                        {showMembers && selectedDepartment === index && (
                            <View>
                                {department.Candidates.map((candidate, candidateIndex) => (
                                    <View key={candidateIndex} style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Image
                                            source={{ uri: candidate.User.avatar }}
                                            style={styles.avatarUser}
                                        />
                                        <Text style={{ color: colors.text, marginLeft: 10 }}><Text style={{ color: colors.accent, fontWeight: '600' }}>{candidate.User.name}</Text> ({candidate.User.gmail})</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
                <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={handleApply}>
                    <Text style={{ color: colors.white, fontSize: 16 }}>Apply</Text>
                </TouchableOpacity>
                <View style={{ height: 200 }}></View>
            </View>
        </ScrollView>
    )
}

export default EventDetail

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    contentContainer: {
        padding: 10,
        borderRadius: 10,
        marginTop: -30,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        height: 430
    },
    infor: {
        margin: 8
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.accent
    },
    slogan: {
        fontSize: 20,
        color: colors.text,
        marginVertical: 2,
        fontWeight: '600'
    },
    icon: {
        height: 26,
        width: 26,
        tintColor: colors.text,
        marginRight: 4
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 8,
        marginBottom: 8,
        color: colors.secondary
    },
    item: {
        borderColor: colors.dark_gray,
        borderBottomWidth: 0.5,
        marginTop: 6,
        marginBottom: 10,
        paddingBottom: 10

    },
    leader: {
        padding: 10,
        paddingTop: 0,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 6,
        marginEnd: 20
    },
    subTitle: {
        fontWeight: '600'
    },
    textInfor: {
        color: colors.text,
        fontSize: 17,
        marginVertical: 2,
        textAlign: 'justify'
    },
    p: {
        paddingHorizontal: 8,
        paddingBottom: 10
    },
    btn: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarUser: {
        width: 40,
        height: 40,
        borderRadius: 100,
        margin: 2,
        borderWidth: 0.1,
        borderColor: colors.text
    },
})
