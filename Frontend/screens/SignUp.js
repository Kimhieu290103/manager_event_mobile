import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import {
    isValidEmail,
    isValidPassword,
    isValidPhoneNumber,
    isValidUsername,
    isValidRePassword,
} from "../utils/validations/validations";
import icons from "../constants/icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isIOS } from "../utils/helpers/Device";
import { useNavigation } from "@react-navigation/native";
import { user } from "../repositories";

export default function SignUp() {
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRePassword, setErrorRePassword] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorAddress, setErrorAddress] = useState("");

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isValidation = () =>
        email.length > 0 &&
        password.length > 0 &&
        phoneNumber.length > 0 &&
        username.length > 0 &&
        address.length > 0 &&
        rePassword.length > 0 &&
        isValidEmail(email) &&
        isValidPassword(password) &&
        isValidPhoneNumber(phoneNumber) &&
        isValidUsername(username) &&
        isValidRePassword(rePassword, password);

    const handleRegister = () => {
        const callApi = async () => {
            try {
                const result = await user.register({
                    name: username,
                    gmail: email,
                    password: password,
                    password2: rePassword,
                    telephone: phoneNumber,
                    address: address,
                    gender: "Male",
                    faculity_name: "Công nghệ thông tin",
                    university: "Bách khoa",
                });

                navigation.navigate("UITab", { user: result.result });
            } catch (err) {
                if (err.message.includes("409")) {
                    alert("This gmail has already been registered");
                }
            }
        };

        callApi();
    };

    return (
        <ScrollView>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                behavior={isIOS() ? "padding" : null}
            >
                <View style={styles.top}>
                    <View style={styles.background}>
                        <Image
                            style={styles.mascos}
                            source={require("../assets/icons/dolphin/dolphin-laptop.png")}
                        />
                        <View style={styles.brand}>
                            <Text style={styles.name}>HighX5</Text>
                            <Text style={styles.slogan}>
                                Elevate Your Events, Connect the Moments
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.form}>
                    {/* email */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            onChangeText={(text) => {
                                setErrorEmail(
                                    isValidEmail(text) == true
                                        ? ""
                                        : "Email not in correct format"
                                );
                                setEmail(text);
                            }}
                            style={styles.input}
                            placeholder="Email"
                        />
                        {errorEmail !== "" && (
                            <Text style={styles.error}>{errorEmail}</Text>
                        )}
                    </View>

                    {/* phone */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput
                            onChangeText={(text) => {
                                setErrorPhoneNumber(
                                    isValidPhoneNumber(text) == true
                                        ? ""
                                        : "Phone number not in correct format"
                                );
                                setPhoneNumber(text);
                            }}
                            style={styles.input}
                            placeholder="Mobile number"
                        />
                        {errorPhoneNumber !== "" && (
                            <Text style={styles.error}>{errorPhoneNumber}</Text>
                        )}
                    </View>

                    {/* address */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            onChangeText={(text) => {
                                text.length > 0
                                    ? setErrorAddress("")
                                    : setErrorAddress(
                                          "Please enter your address"
                                      );
                                setAddress(text);
                            }}
                            style={styles.input}
                            placeholder="Address"
                        />
                        {errorAddress !== "" && (
                            <Text style={styles.error}>{errorAddress}</Text>
                        )}
                    </View>

                    {/* username */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            onChangeText={(text) => {
                                setErrorUsername(
                                    isValidUsername(text) == true
                                        ? ""
                                        : "Username not in correct format"
                                );
                                setUsername(text);
                            }}
                            style={styles.input}
                            placeholder="Username"
                        />
                        {errorUsername !== "" && (
                            <Text style={styles.error}>{errorUsername}</Text>
                        )}
                    </View>

                    {/* password */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.password}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                onChangeText={(text) => {
                                    setErrorPassword(
                                        isValidPassword(text) == true
                                            ? ""
                                            : "Password needs 1 lowercase, 1 uppercase, 1 digit, and minimum 8 characters"
                                    );
                                    setPassword(text);
                                }}
                                placeholder="Password"
                                style={styles.passwordInput}
                            />
                            <TouchableOpacity
                                onPress={toggleShowPassword}
                                style={styles.passwordButton}
                            >
                                <Image
                                    style={styles.iconPassword}
                                    source={
                                        showPassword ? icons.hide : icons.show
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                        {errorPassword !== "" && (
                            <Text style={styles.error}>{errorPassword}</Text>
                        )}
                    </View>

                    {/* rePassword */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Confirm</Text>
                        <View style={styles.password}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                onChangeText={(text) => {
                                    setErrorRePassword(
                                        isValidRePassword(text, password) ==
                                            true
                                            ? ""
                                            : "Passwords do not match"
                                    );
                                    setRePassword(text);
                                }}
                                placeholder="Re-Password"
                                style={styles.passwordInput}
                            />
                        </View>
                        {errorRePassword !== "" && (
                            <Text style={styles.error}>{errorRePassword}</Text>
                        )}
                    </View>

                    <TouchableOpacity
                        disabled={isValidation() == false}
                        onPress={handleRegister}
                        style={styles.button}
                    >
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bottom}>
                    Have a account?
                    <Text
                        onPress={() => {
                            navigation.navigate("Login");
                        }}
                        style={{
                            color: colors.secondary,
                            textDecorationLine: "underline",
                        }}
                    >
                        Log in
                    </Text>
                </Text>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        flex: isIOS() ? 1 : null,
        marginBottom: 30,
    },
    top: {
        flex: 2,
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center",
        borderBottomEndRadius: 200,
    },
    background: {
        backgroundColor: colors.bule_light,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        borderBottomLeftRadius: 400,
        marginLeft: 90,
        flexDirection: "row",
    },
    mascos: {
        width: 50,
        height: 130,
        left: -40,
        flex: 0.5,
        marginTop: 80,
    },
    brand: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        marginTop: 70,
    },
    name: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.accent,
    },
    slogan: {
        color: colors.accent,
        fontSize: 11,
        lineHeight: 28,
    },
    form: {
        flex: isIOS() ? 8 : null,
        alignItems: "center",
        paddingTop: isIOS() ? 150 : 80,
        width: "100%",
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: "100%",
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14,
    },
    password: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 13,
        width: "100%",
        borderColor: colors.dark_gray,
        marginVertical: 6,
        marginTop: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    passwordInput: {
        flex: 9,
    },
    passwordButton: {
        width: 20,
        height: 20,
    },
    iconPassword: {
        width: 20,
        height: 20,
        tintColor: colors.accent,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        padding: 13,
        marginVertical: 10,
        width: "75%",
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex: isIOS() ? 1 : null,
        marginTop: isIOS() ? null : 26,
    },
    error: {
        color: colors.danger,
        width: "100%",
        fontSize: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.accent,
    },
    infoContainer: {
        width: "75%",
        marginBottom: 10,
    },
});
