import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import colors from "../../constants/colors";
const api = require("../../repositories/index");
import RNPickerSelect from "react-native-picker-select";

export default function Question({ route }) {
    const [loading, setLoading] = useState(true);
    const id = route.params.eventId;
    const departments = route.params.departments;
    const user_id = route.params.userId;
    const [data, setData] = useState(null);
    const [answerArray, setAnswerArray] = useState(null);
    const [hasRunEffect, setHasRunEffect] = useState(false);
    const [QuestionFilter , setQuestionFilter] = useState([])
    const [department_name , setDepartment_name ] = useState([])
    const [departmentName, setDepartmentName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.form.getFormByEventId(id);
                setData(response);

                console.log(data)

                const newAnswerArray = response.Questions.map(
                    (question, index) => {
                        if (
                            question.question === "Bạn muốn vào phòng ban nào ?"
                        ) {
                            return {
                                question_id: question.id,
                                answer: "department",
                            };
                        } else {
                            return {
                                question_id: question.id,
                                answer: null,
                            };
                        }
                    }
                );
                setAnswerArray(newAnswerArray);
                setQuestionFilter(response.Questions.filter((item)=>{
                    return (item.question !== "Bạn muốn vào phòng ban nào ?")
                }))
                setDepartment_name(departments.map((item) => {
                    return {
                        label: item.name,
                        value: item.name,
                    };
                }))
                setDepartmentName(department_name[0].value)
            } catch (error) {
                console.log(error.message);
            } finally {
                setHasRunEffect(true);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (hasRunEffect) {
            setLoading(false);
            console.log(answerArray, loading);
        }
    }, [hasRunEffect]);

    if (loading) {
        return (
            <View style={styles.loadingModal}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.loadingText}>Đang lấy dữ liệu...</Text>
            </View>
        );
    }

    const navigation = useNavigation();

    const handlerSubmit = async()=>{
        const answer = {
            user_id : user_id,
            department_name : departmentName,
            answer_array : answerArray,
        }

        console.log(answer);
        await api.form.createAnswer(answer).then(res =>{
            console.log(res)
        })
        .then(()=>{
            navigation.navigate("EventDetail",{eventId : id, userId : user_id})
        })
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.background }}
        >
            <View style={styles.container}>
                {data && (
                    <View style={{justifyContent : "center", alignItems : "center"}}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.slogan}>
                            " {data.Event.slogan} "
                        </Text>
                        <View style={styles.questionContainer}>
                            {QuestionFilter.map((question, index) => {
                                if (
                                    question.question ===
                                    "Bạn muốn vào phòng ban nào ?"
                                )
                                    return;
                                // setCount(count + 1)
                                return (
                                    <View
                                        key={question.id}
                                        style={styles.questionSmallContainer}
                                    >
                                        <Text style={styles.questionTitle}>
                                            {index + 1}. {question.question}
                                        </Text>
                                        <TextInput
                                            multiline
                                            textAlignVertical="top"
                                            style={styles.answerInput}
                                            placeholder="Enter your answer"
                                            onChange={(event) => {
                                                setAnswerArray(
                                                    answerArray.map((item) => {
                                                        if (
                                                            item.question_id ==
                                                            question.id
                                                        ) {
                                                            return {
                                                                question_id:
                                                                    item.question_id,
                                                                answer: event
                                                                    .nativeEvent
                                                                    .text,
                                                            };
                                                        } else {
                                                            return item;
                                                        }
                                                    })
                                                );
                                                console.log(answerArray);
                                            }}
                                        />
                                    </View>
                                );
                            })}
                            <View style={styles.questionSmallContainer}>
                                <Text style={styles.questionTitle}>
                                    {data.Questions.length}. Bạn muốn vào phòng
                                    ban nào ?
                                </Text>
                                <RNPickerSelect
                                    onValueChange={(value) => {
                                        setDepartmentName(value);
                                    }}
                                    items={department_name}
                                    placeholder={{
                                        label: "Select a department",
                                        value: null,
                                    }}
                                    style={styles.selection}
                                    value={departmentName}
                                />
                            </View>
                        </View>
                    </View>
                )}
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        paddingHorizontal: 15,
                    }}
                >
                    <TouchableOpacity 
                        onPress={handlerSubmit}
                        style={styles.buttonSubmit}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.primary,
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
        overflow: "scroll",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    slogan: {
        fontStyle: "italic",
        color: colors.secondary,
        marginVertical: 5,
    },
    questionContainer: {
        width: "100%",
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    questionSmallContainer: {
        marginVertical: 10,
        color: colors.accent,
    },
    answerInput: {
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.dark_gray,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 60,
        color: colors.text,
    },
    questionTitle: {
        fontSize: 15,
        marginBottom: 8,
    },
    buttonSubmit: {
        width: "100%",
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 200,
        paddingVertical: 15,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 15,
        color: colors.white,
    },
    selection: {
        inputIOS: {
            padding: 12,
            borderWidth: 1,
            borderColor: colors.text,
            borderRadius: 6,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
        inputAndroid: {
            padding: 12,
            borderWidth: 1,
            borderColor: colors.text,
            borderRadius: 6,
            color: colors.text,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 6,
        },
    },
    loadingModal: {
        position: "absolute",
        width: 200,
        height: 120,
        borderRadius: 20,
        marginTop: 300,
        marginLeft: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loadingText: {
        color: "#fff",
        marginTop: 10,
    },
});
