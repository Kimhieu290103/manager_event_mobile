import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import icons from '../constants/icons'

export default function DepartmentItem(props) {
    const { number } = props
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={props.onDeleteDepartment}>
                <Image source={icons.delete} style={styles.delete} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.dark_gray,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 4,
        color: colors.accent
    }, 
    description: {
        paddingBottom: 10
    },
    btn: {
        // flex: 
    },
    delete: {
        width: 25,
        height: 25,
        tintColor: colors.danger
    }
})