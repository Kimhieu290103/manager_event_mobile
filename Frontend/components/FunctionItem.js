import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import colors from '../constants/colors'

export default function FunctionItem(props) {
    let icon = props.icon
    let title = props.title
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6}>
            <View style={{backgroundColor: colors.primary, padding: 6, borderRadius: 8}}>
                <Image source={icon} style={styles.icon}/>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Image source={icons.next} style={styles.next}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.gray
    },
    icon: {
        width: 28,
        height: 28,
        tintColor: colors.white
    },
    title: {
        flex: 8,
        paddingHorizontal: 20,
        color: colors.text,
        fontSize: 16,
        fontWeight: '600'
    },
    next: {
        width: 18,
        height: 18,
        tintColor: colors.text
    }
})