import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import formatDateTime from '../utils/helpers/formatDate'

export default function NotificationItem(props) {
    let {onPress} = props
    let {title, content, dateTime, isRead, image} = props.notification
    const imageUrl = image ? { uri: image } : require('../assets/icons/ui-elements/notification.png')

    return (
        <TouchableOpacity 
            style={[
                styles.container,
                !isRead && styles.read
            ]}
            activeOpacity={0.6}
            onPress={onPress}
        >
            <Image 
                style={styles.image}
                source={imageUrl} 
            />
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.dateTime}>{formatDateTime(dateTime)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        // marginHorizontal: 10,
        // marginBottom: 10,
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 10,
    },
    right: {
        flexDirection: 'column',
        flex: 1
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.text
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        marginVertical: 8,
        color: colors.subText
    },
    dateTime: {
        color: colors.subText,
    },
    read: {
        backgroundColor: colors.light_gray
    }
})