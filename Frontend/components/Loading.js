import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})