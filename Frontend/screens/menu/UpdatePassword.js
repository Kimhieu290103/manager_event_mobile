import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import colors from '../../constants/colors'
import { isValidPassword, isValidRePassword } from '../../utils/validations/validations'
import {user as UserRepository} from '../../repositories'
import { startSpinner, spinValue } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function UpdatePassword({route}) {
    const user = route.params.user

    const id = user.id

    const [errorCurrentPassword, setErrorCurrentPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')

    const [password, setPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [loading, setLoading] = useState(true)

    const handleChangePassword = async () => {
        try {
            startSpinner()
            await UserRepository.updatePassword(id, currentPassword, password, rePassword)
            .then((res) => {
                Alert.alert(res.message)
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                setLoading(false)
                Animated.loop(
                    Animated.timing(spinValue, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    })
                ).stop()
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.header}>
                    <Text style={styles.title}>Change your password</Text>
                    <Text style={styles.subText}>Enter a new password below to change your password</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Current password
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='Enter current password' 
                            onChangeText={(text) => {
                                setErrorCurrentPassword(isValidPassword(text) == true ? '' : 'Needs 1 lowercase, 1 uppercase, 1 digit, and minimum 8 characters')
                                setCurrentPassword(text)
                            }}
                        />
                        {errorCurrentPassword !== '' && <Text style={styles.error}>{errorCurrentPassword}</Text>}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            New password
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='Enter new password' 
                            onChangeText={(text) => {
                                setErrorPassword(isValidPassword(text) == true ? '' : 'Needs 1 lowercase, 1 uppercase, 1 digit, and minimum 8 characters')
                                setPassword(text)
                            }}
                        />
                        {errorPassword !== '' && <Text style={styles.error}>{errorPassword}</Text>}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>
                            Confirm password
                        </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='Enter re-type new password' 
                            onChangeText={(text) => {
                                setErrorRePassword(isValidRePassword(text, password) == true ? '' : 'Passwords do not match')
                                setRePassword(text)
                            }}
                        />
                        {errorRePassword !== '' && <Text style={styles.error}>{errorRePassword}</Text>}
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.btn}
                        onPress={handleChangePassword}
                    >
                        <Text style={styles.textBtn}>Save changes</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgot }>Forgot password?</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        padding: 16
    },
    form: {
        height: '100%',
        width: '100%'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.accent
    },
    subText: {
        fontSize: 14,
        color: colors.text,
        width: '80%',
        textAlign: 'center'
    },
    body: {
        paddingTop: 30,
    }, 
    formControl: {
        width: '100%',
        marginBottom: 14
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.accent
    },
    input: {
        padding: 12,
        borderWidth: 0.4,
        borderColor: colors.text,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 6
    },
    error: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        color: colors.danger
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        padding: 14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: colors.primary
    },
    textBtn: {
        color: colors.accent,
        fontWeight: '600',
        fontSize: 16,
        
    }, 
    forgot: {
        color: colors.accent,
        marginTop: 10
    }
})