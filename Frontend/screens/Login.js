import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { user } from '../repositories'
import colors from '../constants/colors'
import icons from '../constants/icons'
import { isValidEmail, isValidPassword, isValidPhoneNumber, isValidUsername } from '../utils/validations/validations'
import { isIOS } from '../utils/helpers/Device'
import { startSpinner, stopSpinner } from '../utils/helpers/startSpinner'
import Loading from '../components/Loading'

function Login(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    const [errorAccount, setErrorAccount] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const [password, setPassword] = useState('Admin123*')
    const [account, setAccount] = useState('Admin123')

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(true)


    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const isValidAccount = (account) =>
        isValidUsername(account) || isValidEmail(account) || isValidPhoneNumber(account)

    const isValidation = () =>
        account.length > 0 && password.length > 0 && isValidAccount(account) && isValidPassword(password)

    const handleLogin = async () => {
        try {
            startSpinner()
            if (!isValidation()) {
                return
            }
            const response = await user.login({ gmail: account, password })

            navigate('UITab', {user: response.user})

        } catch (error) {
            if(error.response.status === 404)
            {
                alert('Account not found')
            }
            if(error.response.status === 401)
            {
                alert('Incorrect password')
            }
        } finally {
            setLoading(false)
            stopSpinner()
        }
    }

    const handleRegister = ()=>{
        navigation.navigate('SignUp')
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.top}>
                <View style={styles.background}>
                    <Image
                        style={styles.mascos}
                        source={require('../assets/icons/dolphin/dolphin-hi.png')}
                    />
                </View>
            </View>
            <View style={styles.brand}>
                <Text style={styles.name}>HighX5</Text>
                <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    onChangeText={(text) => {
                        setErrorAccount(isValidAccount(text) == true ? '' : 'Account not in correct format')
                        setAccount(text)
                    }}
                    style={styles.input}
                    placeholder='Phone number, username, or email'
                />
                {errorAccount !== '' && <Text style={styles.error}>{errorAccount}</Text>}
                <View style={styles.password}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        onChangeText={(text) => {
                            setErrorPassword(isValidPassword(text) == true ? '' : 'Password needs 1 lowercase, 1 uppercase, 1 digit, and minimum 8 characters')
                            setPassword(text)
                        }}
                        placeholder="Password"
                        style={styles.passwordInput}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordButton}>
                        <Image
                            style={styles.iconPassword}
                            source={showPassword ? icons.hide : icons.show}
                        />
                    </TouchableOpacity>
                </View>
                {errorPassword !== '' && <Text style={styles.error}>{errorPassword}</Text>}
                <TouchableOpacity
                    style={styles.button}
                    disabled={isValidation() == false}
                    onPress={handleLogin}
                >
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.bottom}
                onPress={handleRegister}
            >
                <Text>
                    Don't have an account? <Text style={{ color: colors.secondary, textDecorationLine: 'underline' }}>Sign up?</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    top: {
        flex: 6,
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
        borderBottomEndRadius: 200,
    },
    background: {
        backgroundColor: colors.bule_light,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomRightRadius: 800,
    },
    mascos: {
        width: 200,
        height: 200,
    },
    brand: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
        color: colors.accent
    },
    slogan: {
        color: colors.accent,
        fontSize: 14,
        lineHeight: 28,
    },
    form: {
        flex: 6,
        alignItems: 'center',
        width: '100%'
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: '75%',
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14
    },
    password: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: '75%',
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    passwordInput: {
        flex: 9
    },
    passwordButton: {
        width: 20,
        height: 20
    },
    iconPassword: {
        width: 20,
        height: 20,
        tintColor: colors.accent
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 13,
        marginVertical: 10,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
    },
    error: {
        color: colors.danger,
        width: '75%',
        fontSize: 12,
    }
})