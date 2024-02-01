import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Welcome, Login, SignUp, EventList, Menu, Profile, NotificationList, Home, NewEvent } from './screens'
import useLoadedFonts from './utils/helpers/useLoadedFonts'
import colors from './constants/colors'
import NavigationApp from './navigation/NavigationApp'


export default function App() {
    const dataLoaded = useLoadedFonts()
    if (!dataLoaded) {
        return null
    }

    return (
        <View style={styles.app}>
            <NavigationApp />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: colors.white,
        flex: 1,
    }
})
