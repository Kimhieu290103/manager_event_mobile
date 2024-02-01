import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { isIOS } from '../utils/helpers/Device'
import formatDateTime from '../utils/helpers/formatDate'

export default function EventItem(props) {
    let {event, onPress} = props
    let {location, name, slogan} = props.event
    const truncatedLocation = location && location.length > 29 ? location.substring(0, 29) + '...' : location
    const truncatedEventName = name.length > 18 ? name.substring(0, 18) + '...' : name
    const truncatedSlogan = slogan && slogan.length > 25 ? slogan.substring(0, 25) + '...' : slogan

    return (
        <TouchableOpacity 
        onPress={onPress}
            activeOpacity={0.6}
            style={{
                backgroundColor: colors.white,
                height: isIOS() ? 150 : 170,
                padding: 10,
                flexDirection: 'row',
                marginVertical: 7,
                borderColor: colors.gray,
                borderWidth: 1.4,
                marginHorizontal: 10,
                borderRadius: 10,
                borderLeftWidth: 4,
                borderLeftColor: colors.primary,
                overflow: 'hidden',
            }}
        >
            <Image
                style={styles.image}
                source={{ uri: `${event.image}` }}
            />
            <View style={styles.main}>
                <Text style={styles.name}>{truncatedEventName}</Text>
                <Text style={styles.slogan}>{truncatedSlogan}</Text>
                <Text style={{
                    backgroundColor: event.status == 0 ? colors.warning : event.status == 1 ? colors.success : colors.danger,
                    fontWeight: '700',
                    color: colors.white,
                    width: 90,
                    textAlign: 'center',
                    borderRadius: 20,
                    marginBottom: 8,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {event.status == 0 ? 'Upcoming' : event.status == 1 ? 'On going' : 'Completed'}
                </Text>
                <View style={{justifyContent: 'space-between'}}>
                    <View style={styles.dateStart}>
                        <Image source={require('../assets/icons/ui-elements/calendar.png')} style={styles.calendar}/>
                        <Text style={{color: colors.text}}>{formatDateTime(event.date_start)}</Text>
                    </View>
                    <View style={styles.location}>
                        <Image source={require('../assets/icons/ui-elements/pin.png')} style={styles.pin}/>
                        <Text style={{color: colors.text}}>{truncatedLocation}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 10,
        borderColor: colors.dark_gray,
        borderWidth: 0.5,
    },
    main: {
        backgroundColor: 'white',
        flex: 1,
        height: '100%'
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.text,
    },
    slogan: {
        color: colors.subText,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20
    },
    line: {
        backgroundColor: colors.accent,
        height: 1
    },
    location: {
        color: colors.subText,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pin: {
        width: 18,
        height: 18,
        marginEnd: 4,
        tintColor: colors.text
    },
    dateStart: {
        color: colors.subText,
        flexDirection: 'row',
        marginBottom: 4
    },
    calendar: {
        width: 18,
        height: 18,
        marginEnd: 4,
        tintColor: colors.text
    }
})