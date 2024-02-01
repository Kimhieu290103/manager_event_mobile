import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
import { useSafeArea } from '../../utils/helpers/Device';
import { launchImageLibraryAsync } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import formatDateTime from '../../utils/helpers/formatDate';

export default function Information() {
    const [isFocused, setIsFocused] = useState(false);

    const [showRealApp, setShowRealApp] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [slogan, setSlogan] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState(1);
    const [type_name, setTypeName] = useState('');

    const typeOption = [
        { label: 'Fundraising', value: 'Fundraising' },
        { label: 'Social', value: 'Social' },
        { label: 'Virtual', value: 'Virtual' },
        { label: 'Festivals', value: 'Festivals' },
        { label: 'Community', value: 'Community' },
        { label: 'Pop-up', value: 'Pop-up' },
    ];

    const handleDone = () => {
        setShowRealApp(true);
    };

    useEffect(() => {
        if (showRealApp) {
            const timer = setTimeout(() => {
                setShowRealApp(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showRealApp]);

    // Đường kẻ
    const HorizontalLine = () => {
        return <View style={styles.horizontalLine} />;
    };
    // Ẩn / Hiện bàn phím
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        // Clean up the event listeners when the component unmounts
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    // DatePicker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [startDateSeclect, setStartDateSeclect] = useState(startDate.toLocaleDateString());
    const [endDateSeclect, setEndDateSeclect] = useState(endDate.toLocaleDateString());

    const handleStartDateChange = (event, selectedDate) => {
        setShowStartDatePicker(false);
        if (selectedDate !== undefined) {
            setStartDate(selectedDate);
            setStartDateSeclect(moment(selectedDate).format('DD/MM/YYYY'));
        }
    };
    const handleEndDateChange = (event, selectedDate) => {
        setShowEndDatePicker(false);
        if (selectedDate !== undefined) {
            setEndDate(selectedDate);
            setEndDateSeclect(moment(selectedDate).format('DD/MM/YYYY'));
        }
    };
    const showStartDatePickerModal = () => {
        setShowStartDatePicker(true);
    };
    const showEndDatePickerModal = () => {
        setShowEndDatePicker(true);
    };

    // Hiển thị Album
    const [img, setImg] = useState('');
    const requesAlbumPermission = async () => {
        try {
            const album = await launchImageLibraryAsync();
            console.log(album.assets[0].uri);
            setImg(album.assets[0].uri);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNext = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('slogan', slogan);
        formData.append('location', location);
        formData.append('date_start', formatDateTime(startDate));
        formData.append('date_end', formatDateTime(endDate));
        formData.append('description', description);
        formData.append('type_name', type_name);
        formData.append('image', {
            uri: img,
            type: 'image/jpeg',
            name: 'event.jpg',
        });
        props.onNext(formData);
    };

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={[styles.body, { paddingTop: useSafeArea() }]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Information</Text>
                        <Text style={styles.subText}>Fill in information to create a project</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content_img}>
                            {img ? (
                                <TouchableOpacity onPress={requesAlbumPermission} style={styles.img}>
                                    <Image
                                        source={{ uri: img }}
                                        style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={requesAlbumPermission}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Icon
                                            name="images"
                                            size={40}
                                            color={colors.accent}
                                            style={{ marginRight: 10 }}
                                        />
                                        <Text style={styles.content_lable}>Image Event</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>

                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Name Event</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter even's name"
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Slogan</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter event's logan"
                                onChangeText={(text) => setSlogan(text)}
                            />
                        </View>
                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Location</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter event's location"
                                onChangeText={(text) => setLocation(text)}
                            />
                        </View>
                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Type</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setTypeName(value);
                                }}
                                items={typeOption}
                                placeholder={{ label: 'Other', value: 'Other' }}
                                style={styles.selection}
                                value={type_name}
                            />
                        </View>
                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Start Date</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.input123} onPress={showStartDatePickerModal}>
                                    {startDateSeclect}
                                </Text>
                                <Icon
                                    onPress={showStartDatePickerModal}
                                    name="calendar"
                                    size={20}
                                    color={'#969292'}
                                ></Icon>
                                {showStartDatePicker && (
                                    <DateTimePicker
                                        value={startDate}
                                        mode="date"
                                        display="default"
                                        onChange={handleStartDateChange}
                                        is24Hour={true}
                                        textColor={colors.accent}
                                        minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))}
                                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))}
                                    />
                                )}
                            </View>
                        </View>
                        <View style={styles.content_Event_Date}>
                            <Text style={styles.content_lable}>End Date</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.input123} onPress={showEndDatePickerModal}>
                                    {endDateSeclect}
                                </Text>
                                <Icon
                                    onPress={showEndDatePickerModal}
                                    name="calendar"
                                    size={20}
                                    color={'#969292'}
                                ></Icon>

                                {showEndDatePicker && (
                                    <DateTimePicker
                                        value={endDate}
                                        mode="date"
                                        display="default"
                                        onChange={handleEndDateChange}
                                        is24Hour={true}
                                        textColor={colors.accent}
                                        minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))}
                                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))}
                                    />
                                )}
                            </View>
                        </View>

                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Description</Text>
                            <TextInput
                                style={styles.input_Description}
                                placeholder="Enter description"
                                multiline
                                textAlignVertical="top"
                                onChangeText={(text) => {
                                    setDescription(text);
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.content_buttom}>
                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.buttom_lable}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        // marginHorizontal: 8,
        // paddingHorizontal: 10,
        height: 800,
        width: '100%',
        height: '100%',
        backgroundColor: colors.background,
    },
    body: {
        flexDirection: 'column',
        backgroundColor: colors.background,
        paddingBottom: 40,
        width: '100%',
        height: '100%',
        flex: 1000,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    title: {
        fontSize: 28,
        color: colors.accent,
        fontWeight: '600',
    },
    subText: {
        marginVertical: 4,
        color: colors.text,
        width: '80%',
        fontSize: 14,
        textAlign: 'center',
    },
    container: {},
    top: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content_buttom: {
        height: 80,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.primary,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    buttom_lable: {
        textAlign: 'center',
        color: colors.white,
    },

    content: {
        width: '100%',
    },
    content_img: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
    },
    content_lable: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.accent,
    },
    content_Event: {
        marginTop: 20,
    },
    content_Event_Date: {
        marginTop: 10,
    },
    input: {
        marginTop: 5,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: '400',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border,
        color: colors.accent,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.white,
        color: colors.accent,
    },
    input123: {
        flex: 1,
        fontSize: 16,
        color: colors.accent,
    },
    input_Description: {
        marginTop: 5,
        backgroundColor: colors.white,
        color: colors.accent,
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '400',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border,
    },
    selection: {
        inputIOS: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.accent,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 6,
        },
        inputAndroid: {
            padding: 12,
            borderWidth: 0.4,
            borderColor: colors.accent,
            borderRadius: 8,
            color: colors.text,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 6,
        },
    },
});
