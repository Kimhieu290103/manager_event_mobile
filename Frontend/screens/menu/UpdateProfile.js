import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";
import icons from "../../constants/icons";
import {
    isValidLength,
    isValidPhoneNumber,
    isValidSelect,
    isValisName,
} from "../../utils/validations/validations";
import RNPickerSelect from "react-native-picker-select";
import CalendarPicker from "react-native-calendar-picker";
import formatDateTime from "../../utils/helpers/formatDate";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { Camera } from "expo-camera";
import ActionSheet from "@expo/react-native-action-sheet";
import ModalSelector from "react-native-modal-selector";
import Dialog from "react-native-popup-dialog";
import { user as UserRepository } from '../../repositories'
import { useNavigation, useRoute } from "@react-navigation/native";

export default function UpdateProfile() {
    const route = useRoute()

    const user = route.params.user

    const faculityOption = [
        { label: "Công nghệ thông tin", value: "Công nghệ thông tin" },
        { label: "Công nghệ thực phẩm", value: "Công nghệ thực phẩm" },
        { label: "Xây dựng", value: "Xây dựng" },
        { label: "Other", value: "Other" },
    ];

    const genderOption = [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
    ];

    const [name, setName] = useState(user.name);
    const [telephone, setTelephone] = useState(user.telephone);
    const [address, setAddress] = useState(user.address);
    const [birthday, setBirthday] = useState(user.birthday);
    const [faculity_name, setFaculityName] = useState(faculityOption[user.faculity_id-1].label);
    const [gender, setGender] = useState(user.gender == 'Male' ? genderOption[0].label : user.gender == 'Female' ? genderOption[1].label : genderOption[2].label);

    const [errName, setErrName] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errAddress, setErrAddress] = useState("");
    const [errGender, setErrGender] = useState("");
    const [errBirthday, setErrBirthday] = useState("");
    const [errFaculityName, setErrFaculityName] = useState("");
    // Hiển thị Album
    const [img, setImg] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleDatePress = () => {
        setDatePickerVisibility(true);
    };

    const handleDateChange = (date) => {
        setDatePickerVisibility(false);
        setBirthday(date);
    };

    const navigation = useNavigation()

    const handleSave = () => {
        // name
        if(name == '')
        {
            setErrName('Please enter your name')
            return
        }
        else
        setErrName('')
        // telephone
        if(telephone == '')
        {
            setErrPhone('Please enter your telephone')
            return
        }
        else
        setErrPhone('')
        if(telephone.length != 10)
        {
            setErrPhone('Please enter all 10 numbers')
            return
        }
        else
        setErrPhone('')
        // birthday
        if(birthday == '')
        {
            setErrBirthday('Please enter your birthday')
            return
        }
        else
        setErrBirthday('')
        // address
        if(address == '')
        {
            setErrAddress('Please enter your address')
            return
        }
        else
        setErrAddress('')
        // gender
        if(gender == '')
        {
            setErrGender('Please choose your gender')
            return
        }
        setErrGender('')
        // faculity_name
        if(faculity_name == '')
        {
            setErrFaculityName('Please choose your faculity name')
            return
        }
        setErrFaculityName('')

        const updateUser = {
            id : user.id,
            name : name, 
            telephone : telephone,
            address : address,
            gender : gender,
            birthday : formatDateTime(birthday),
            faculity_name : faculity_name,
            avatar : user.avatar
        }
        UserRepository.updateInfo(updateUser).then(res=>{
            if(img)
                return
            
            const newUser = res.result;
            navigation.navigate("UITab", {user : newUser})
        }).catch(err =>{
            console.log(err)
        })

        if(img)
            UserRepository.updateAvatar(user.id, img).then(res=>{
                const newUser = res.result;
                navigation.navigate("UITab", {user : newUser})  
            }).catch(err =>{
                console.log(err)
            })
    };

    
    const requesAlbumPermission = async () => {
        try {
            // mo thu vien
            const album = await launchImageLibraryAsync();
            console.log(album.assets[0].uri);
            setImg(album.assets[0].uri);
        } catch (error) {
            console.log(error);
        }
    };
    // Hien thi Camera
    const requesCameraPerission = async () => {
        try {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status === "granted") {
                // Neu da co quyen truy cap, mo camera
                const result = await launchCameraAsync();
                console.log(result.assets[0].uri);
                setImg(result.assets[0].uri);
            } else {
                // Nếu chưa có quyền truy cập, thông báo yêu cầu quyền
                alert(
                    "Camera permission denied. Please enable camera access in your device settings."
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Show option
    const [dialogVisible, setDialogVisible] = useState(false);

    const showImageOptions = () => {
        setDialogVisible(true);
    };

    const hideModal = () => {
        setDialogVisible(false);
    };
    const handleOptionSelected = (option) => {
        switch (option) {
            case "Camera":
                requesCameraPerission();
                break;
            case "Album":
                requesAlbumPermission();
                break;
            default:
                // Cancel button pressed or outside the modal
                break;
        }
        hideModal();
    };

    const options = [
        { key: 0, label: "Camera" },
        { key: 1, label: "Album" },
        { key: 2, label: "Cancel", customStyle: { color: "red" } },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.form}>
                <View style={styles.header}>
                    <Text style={styles.title}>Edit profile</Text>
                    <Text style={styles.subText}>
                        People will get to know you with in info below
                    </Text>
                </View>
                <View style={styles.avatar}>
                    {img != "" ? (
                        <Image source={{ uri: img }} style={styles.image} />
                    ) : (
                        <Image
                            source={{uri : user.avatar}}
                            style={styles.image}
                        />
                    )}
                    <TouchableOpacity
                        style={styles.editAvatar}
                        onPress={() => showImageOptions()}
                    >
                        <Image
                            source={icons.editAvatar}
                            style={styles.editAvatarImg}
                        />
                    </TouchableOpacity>

                    {/* Dialog for image source selection */}
                    <Dialog
                        visible={dialogVisible}
                        onTouchOutside={() => hideDialog()}
                    >
                        <View style={styles.dialogView}>
                            <Text
                                style={{
                                    fontWeight: "600",
                                    fontSize: 18,
                                    marginBottom: 10,
                                }}
                            >
                                Select Image Source
                            </Text>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option.key}
                                    style={styles.optionButton}
                                    onPress={() =>
                                        handleOptionSelected(option.label)
                                    }
                                >
                                    <Text style={option.customStyle}>
                                        {option.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Dialog>
                </View>
                <View style={styles.body}>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={user.name}
                            placeholder="Enter your name"
                            onChangeText={(text) => {
                                setErrName(
                                    isValidLength(text, 1) == true
                                        ? ""
                                        : "Name cannot be left blank"
                                );
                                setName(text);
                            }}
                        />
                        {errName !== "" && (
                            <Text style={styles.error}>{errName}</Text>
                        )}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Phone number</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={user.telephone}
                            placeholder="Enter your phone number"
                            onChangeText={(text) => {
                                setErrPhone(
                                    isValidPhoneNumber(text) == true
                                        ? ""
                                        : "Phone number not in correct format"
                                );
                                setTelephone(text);
                            }}
                        />
                        {errPhone !== "" && (
                            <Text style={styles.error}>{errPhone}</Text>
                        )}
                    </View>
                    <View style={styles.col2}>
                        <View style={styles.formControl2}>
                            <Text style={styles.label}>Gender</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setErrGender(
                                        isValidSelect(value)
                                            ? ""
                                            : "This field must be selected"
                                    );
                                    setGender(value);
                                }}
                                items={genderOption}
                                placeholder={{
                                    label: "Select an option",
                                    value: null,
                                }}
                                style={styles.selection}
                                value={gender}
                            />
                            {errGender !== "" && (
                                <Text style={styles.error}>{errGender}</Text>
                            )}
                        </View>
                        <View style={styles.formControl2}>
                            <Text style={styles.label}>Birthday</Text>

                            <TouchableOpacity
                                onPress={handleDatePress}
                                style={styles.dateInput}
                            >
                                <Text style={{ color: colors.text }}>
                                    {birthday
                                        ? formatDateTime(birthday.toString())
                                        : "Select Date"}
                                </Text>
                            </TouchableOpacity>

                            <Modal
                                transparent={true}
                                animationType="fade"
                                visible={isDatePickerVisible}
                                onRequestClose={() =>
                                    setDatePickerVisibility(false)
                                }
                            >
                                <View style={styles.modalContainer}>
                                    <TouchableOpacity
                                        style={styles.modalBackground}
                                        activeOpacity={1}
                                        onPressOut={() =>
                                            setDatePickerVisibility(false)
                                        }
                                    >
                                        <View style={styles.modalContent}>
                                            <CalendarPicker
                                                onDateChange={handleDateChange}
                                                selectedDate={birthday}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            defaultValue={user.address}
                            placeholder="Enter your address"
                            onChangeText={(text) => {
                                setErrAddress(
                                    isValidLength(text, 6) == true
                                        ? ""
                                        : "Address not in correct format"
                                );
                                setAddress(text);
                            }}
                        />
                        {errAddress !== "" && (
                            <Text style={styles.error}>{errAddress}</Text>
                        )}
                    </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Faculity</Text>
                        <RNPickerSelect
                            onValueChange={(value) => {
                                setErrFaculityName(
                                    value
                                        ? ""
                                        : "Faculity not in correct format"
                                );
                                setFaculityName(value);
                            }}
                            items={faculityOption}
                            placeholder={{
                                label: "Select an option",
                                value: null,
                            }}
                            style={styles.selection}
                            value={faculity_name}
                        />
                        {errFaculityName !== "" && (
                            <Text style={styles.error}>{errFaculityName}</Text>
                        )}
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btn}
                        onPress={() => handleSave()}
                    >
                        <Text style={styles.textBtn}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 16,
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        width: "100%",
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        color: colors.accent,
    },
    subText: {
        fontSize: 14,
        color: colors.text,
        width: "80%",
        textAlign: "center",
        marginTop: 4,
    },
    avatar: {
        width: 120,
        height: 120,
        position: "relative",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    editAvatar: {
        width: 36,
        height: 36,
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: colors.white,
    },
    editAvatarImg: {
        width: 16,
        height: 16,
        tintColor: colors.white,
    },
    body: {
        paddingTop: 30,
        width: "100%",
    },
    formControl: {
        width: "100%",
        marginBottom: 12,
    },
    col2: {
        width: "100%",
        marginBottom: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    formControl2: {
        width: "48%",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.accent,
    },
    input: {
        padding: 12,
        borderWidth: 0.4,
        borderColor: colors.text,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 6,
        color: colors.text,
    },
    error: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 12,
        color: colors.danger,
    },
    selection: {
        inputIOS: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.text,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
        inputAndroid: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.text,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
    },
    bottom: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: 100,
        marginBottom: 200,
    },
    btn: {
        padding: 14,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: colors.primary,
    },
    textBtn: {
        color: colors.accent,
        fontWeight: "600",
        fontSize: 16,
    },
    dateInput: {
        padding: 12,
        borderWidth: 0.4,
        borderColor: colors.text,
        borderRadius: 8,
        color: colors.text,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 6,
    },
    modalContainer: {
        flex: 1,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        marginHorizontal: 6,
        borderRadius: 10,
        marginTop: 200,
        padding: 10,
    },
    dialogView: {
        backgroundColor: "white",
        padding: 30,
        alignItems: "center",
    },
    optionButton: {
        marginVertical: 10,
    },
});
