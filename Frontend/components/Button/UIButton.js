import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

export default function UIButton(props) {
    const buttonStyles = {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginHorizontal: 40,
        backgroundColor: props.bgColor ? props.bgColor : colors.primary ,
    }

    const titleStyles = {
        textTransform: 'uppercase',
        fontWeight: props.txtWeight ? props.txtWeight : '600',
        fontSize: props.size ? props.size : 18,
        color: props.txtColor ? props.txtColor : colors.white,
    }

    return (
        <TouchableOpacity
            style={[buttonStyles]}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Text style={titleStyles}>{props.title}</Text>
        </TouchableOpacity>
    )
}
