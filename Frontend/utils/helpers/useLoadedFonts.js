import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'

const fetchFonts = async () => {
    return Font.loadAsync({
        'Comfortaa': require('../../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
        'Comfortaa-Regular': require('../../assets/fonts/Comfortaa-Regular.ttf'),
        'Comfortaa-Bold': require('../../assets/fonts/Comfortaa-Bold.ttf')
    })
}

export default useLoadedFonts = () => {
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        const loadFonts = async () => {
            await fetchFonts()
            setDataLoaded(true)
        }

        loadFonts()
    }, [])

    return dataLoaded
}
