import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Platform,
    Animated,
    ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import { isIOS } from '../../utils/helpers/Device'
import { event as EventRepository } from '../../repositories'
import { useSafeArea } from '../../utils/helpers/Device'
import { useNavigation } from '@react-navigation/native'
import EventItem from '../../components/EventItem'
import {startSpinner, stopSpinner} from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function EventType(props) {
    const [events, setEvents] = useState([])
    const [searchText, setSearchText] = useState('')
    const [loading, setLoading] = useState(true)
    const {userId, filter} = props.route.params
    console.log(userId, filter)

    useEffect(() => {
        startSpinner()

        EventRepository.getEventByCategory(filter)
            .then((responseEvents) => {
                setEvents(responseEvents.rows)
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                setLoading(false)
                stopSpinner()
            })
    }, [])

    const filterEvent = events.filter((eachEvent) => eachEvent.name.toLowerCase().includes(searchText.toLowerCase()))

    const navigation = useNavigation()

    const handleEventDetail = (eventId, eventName) => {
        navigation.navigate('EventDetail', { eventId, eventName, userId })
    }

    return (
        <View style={[styles.container]}>
            {loading ? (
                <Loading/>
            ) : filterEvent.length > 0 ? (
                <FlatList
                    data={filterEvent}
                    renderItem={({ item }) => (
                        <EventItem event={item} key={item.id} onPress={() => handleEventDetail(item.id, item.name)} />
                    )}
                    keyExtractor={(eachEvent) => eachEvent.id}
                />
            ) : (
                <View style={styles.notFound}>
                    <Image style={styles.iconNotFound} source={icons.smartphone} />
                    <Text style={styles.textNotFound}>Event not found !!!</Text>
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    top: {
        height: 54,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 10,
        position: 'relative',
    },
    search: {
        zIndex: 1,
        height: 30,
        width: 30,
        position: 'absolute',
        left: 14,
        tintColor: colors.subText,
    },
    input: {
        backgroundColor: colors.light_gray,
        flex: 1,
        fontSize: 18,
        paddingVertical: 10,
        paddingStart: 40,
        borderRadius: 10,
    },
    filter: {
        zIndex: 4,
        height: 24,
        width: 24,
        marginHorizontal: 4,
        tintColor: colors.subText,
    },
    notFound: {
        flex: 1,
        marginTop: 150,
        alignItems: 'center',
    },
    iconNotFound: {
        width: 120,
        height: 120,
    },
    textNotFound: {
        marginTop: 10,
        color: colors.accent,
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
