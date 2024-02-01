import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/colors';
import { useSafeArea } from '../../utils/helpers/Device';
import FormQuestion from './FormQuestion';
import QuestionItem from '../../components/QuestionItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreateQuestion(props) {
    const infor = props.route.params.formData;
    const userId = props.route.params.userId;
    const [questionList, setQuestionList] = useState([]);

    const handleAddQuestion = (newQuestion) => {
        if (newQuestion) {
            setQuestionList([...questionList, newQuestion]);
        }
    };

    const handleDeleteQuestion = (index) => {
        Alert.alert('Notification', 'Do you want to delete?', [
            {
                text: 'OK',
                onPress: () => {
                    let questionListTmp = [...questionList];
                    questionListTmp.splice(index, 1);
                    setQuestionList(questionListTmp);
                },
            },
            {
                text: 'Cancel',
                onPress: () => {},
            },
        ]);
    };

    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('Department', { infor, questionList, userId });
    };
    const handleBack = () => {
        navigation.navigate('NewEvent');
    };

    return (
        <KeyboardAwareScrollView scrollEnabled={false} style={{ backgroundColor: colors.background }}>
            <View style={[styles.container, { paddingTop: useSafeArea() }]}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                    }}
                >
                    <View style={styles.content_button}>
                        <Icon
                            style={styles.button}
                            name="arrow-back"
                            size={30}
                            color={colors.background}
                            onPress={handleBack}
                        />
                    </View>
                    <View style={styles.content_button}>
                        <Icon
                            style={styles.button}
                            name="arrow-forward"
                            size={30}
                            color={colors.background}
                            onPress={handleNext}
                        />
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>Question</Text>
                    <Text style={styles.subText}>Add questions to use when surveying members</Text>
                </View>
                <ScrollView style={styles.list}>
                    {questionList.map((item, index) => (
                        <QuestionItem
                            key={index}
                            name={item.name}
                            number={index + 1}
                            onDeleteQuestion={() => handleDeleteQuestion(index)}
                        />
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <FormQuestion onAddQuestion={handleAddQuestion} />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        height: 850,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    list: {
        margin: 6,
    },
    footer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
    },
    content_button: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    button: {
        marginVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});
