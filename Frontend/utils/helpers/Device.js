import { Platform } from 'react-native'
export const isIOS = () => Platform.OS === 'ios'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
export const useSafeArea = () => {
    const insets = useSafeAreaInsets()
    return insets.top || 0
}
