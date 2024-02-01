import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View, Text, Animated, ActivityIndicator } from 'react-native'
import colors from '../../constants/colors'
import { event as EventRepository } from '../../repositories'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import { useNavigation } from '@react-navigation/native'


export default function HotEvent(props) {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    const userId = props.user_id

    useEffect(() => {
        startSpinner()
        EventRepository.getEventsHome()
            .then(responseEvents => {
                setEvents(responseEvents)
            })
            .catch((error) => {
                console.error('Error loading events:', error)
            })
            .finally(() => {
                setLoading(false)
                stopSpinner()
            })
    }, [])

    const navigation = useNavigation()
    const handleEventDetail = (eventId, eventName) => {
        navigation.navigate('EventDetail', { eventId, eventName, userId })
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    handleEventDetail(item.id,item.name)
                }}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : (
                    <>
                        <View style={styles.header}>
                            <Text style={styles.text}>Popular event</Text>
                        </View>
                        <FlatList
                            data={events}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 5,
        paddingVertical: 10,
        height: '100%'
    },
    header: {
        padding: 10,
        paddingBottom: 0,
    },
    text: {
        color: colors.accent,
        fontWeight: '700',
        fontSize: 22,
    },
    itemContainer: {
        overflow: 'hidden',
        paddingVertical: 10,
    },
    itemImage: {
        margin: 4,
        width: 300,
        height: 220,
        resizeMode: 'cover',
        borderColor: colors.dark_gray,
        borderWidth: 0.2,
        borderRadius: 8,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
})
