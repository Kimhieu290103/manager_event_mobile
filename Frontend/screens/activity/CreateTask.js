import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment-timezone';
import formatDateTime from '../../utils/helpers/formatDate';
import { activity as ActivityRepository } from '../../repositories'
import { useNavigation } from '@react-navigation/native';

const CreateTask = ({route}) => {

    const {event, leaderId, userId, loadAPI, fromGetTask} = route.params

    const navigation = useNavigation()

    const [errContent, setErrContent] = useState(false)
    const [errEndDate, setErrEndDate] = useState(false)
    

    // DatePicker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [startDateSeclect, setStartDateSeclect] = useState(startDate.toLocaleDateString());
    const [endDateSeclect, setEndDateSeclect] = useState(endDate.toLocaleDateString());
    const [content, setContent] = useState('')

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

    // Ẩn bàn phím
    const handlePressOutside = () => {
        Keyboard.dismiss(); // Dismiss the keyboard
    };

    const handlerPressCreate = ()=>{
        if(startDate > endDate)
        {
            setErrEndDate(true)
            return
        }else
        {
            setErrEndDate(false)
        }
        if(content == '')
        {
            setErrContent(true)
            return
        }

        const callApi = async()=>{
            await ActivityRepository.createTask({
                event_id : event.id,
                date_start : formatDateTime(startDate),
                date_end : formatDateTime(endDate),
                content : content
            })
            .then(result =>{
                console.log(result)
                if(fromGetTask)
                    navigation.navigate('GetTask', {event: event, userId: userId, leaderId, loadAPI : !loadAPI})
                else
                {
                    // navigation.navigate('GetTask', {event: event, userId: userId, leaderId, loadAPI : !loadAPI})
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
        callApi()
    }

    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View style={styles.container}>
                <View style={styles.event}>
                    <View style={styles.event_img}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={{ uri: event.image }} />
                    </View>
                    <Text style={styles.event_lable}>{event.name}</Text>
                </View>
                <View style={styles.task}>
                    <View style={styles.task_time}>
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
                                        textColor={colors.accent} // Màu chữ của DatePicker
                                        minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))} // Ngày tối thiểu là 5 năm kể từ ngày hiện tại
                                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))} // Ngày tối đa là 5 năm kể từ ngày hiện tại
                                        // style={{ width: 0, height: 0 }} // Ẩn DateTimePicker
                                        // isVisible={showDatePicker}
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
                                        textColor={colors.accent} // Màu chữ của DatePicker
                                        minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 5))} // Ngày tối thiểu là 5 năm kể từ ngày hiện tại
                                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 5))} // Ngày tối đa là 5 năm kể từ ngày hiện tại
                                        // style={{ width: 0, height: 0 }} // Ẩn DateTimePicker
                                        // isVisible={showDatePicker}
                                    />
                                )}
                            </View>
                        </View>
                        {errEndDate && <Text style={styles.error}>Please enter an end date later than the start date</Text>}
                    </View>
                    <View style={styles.task_content}>
                        <View style={styles.content_Event}>
                            <Text style={styles.content_lable}>Content Task</Text>
                            <TextInput
                                style={styles.input_Description}
                                placeholder="Mô tả công việc"
                                multiline
                                textAlignVertical="top" // Bắt đầu từ phía trên xuống
                                onChangeText={(text) => {
                                    setContent(text)
                                }}
                            />
                            {errContent && <Text style={styles.error}>Please enter the content task</Text>}
                        </View>
                    </View>
                </View>
                <View style={styles.content_buttom}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handlerPressCreate}
                    >
                        <Text style={styles.buttom_lable}>Create Event</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateTask;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: colors.background,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    event: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    event_img: {
        width: 70,
        height: 70,
        borderRadius: 200,
        borderBlockColor: colors.primary,
        borderWidth: 2,
    },
    event_lable: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: '600',
        color: colors.accent,
    },
    content_Event: {
        marginTop: 20,
    },
    content_Event_Date: {
        marginTop: 10,
    },
    content_lable: {
        fontSize: 20,
        fontWeight: '500',
        // marginLeft: 10,
        color: colors.accent,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Để canh giữa theo chiều dọc
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        // marginLeft: 10,
        // width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.white,
        color: colors.accent,
    },
    input123: {
        flex: 1,
        fontSize: 16,
        // fontWeight: '600',
        color: colors.accent,
    },
    input_Description: {
        marginTop: 5,
        // marginLeft: 10,
        backgroundColor: colors.white,
        color: colors.accent,
        // width: '90%',
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '400',
        borderRadius: 5,
        borderWidth: 1, // Sử dụng borderWidth thay vì border
        borderColor: colors.border, // Thay 'yourBorderColor' bằng mã màu hoặc tên màu sắc của bạn
    },
    content_buttom: {
        height: 80,
        justifyContent: 'center',
        // marginHorizontal: 8,
        marginTop: 20,
        marginBottom: 30,
    },
    button: {
        backgroundColor: colors.primary,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        // marginHorizontal: 10,
        borderRadius: 4,
    },
    buttom_lable: {
        textAlign: 'center',
        color: colors.white,
    },
    error : {
        color : colors.danger,
        marginTop : 4,
    }
});
