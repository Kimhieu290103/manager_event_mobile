import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/colors';
import { useSafeArea } from '../../utils/helpers/Device';
import DepartmentItem from '../../components/DepartmentItem';
import Form from './Form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Department(props) {
    const [departmentList, setDepartmentList] = useState([]);

    const handleAddDepartment = (newDepartment) => {
        if (newDepartment.name && newDepartment.description) {
            setDepartmentList([...departmentList, newDepartment]);
        }
    };

    const handleDeleteDepartment = (index) => {
        Alert.alert('Notification', 'Do you want to delete?', [
            {
                text: 'OK',
                onPress: () => {
                    let departmentListTmp = [...departmentList];
                    departmentListTmp.splice(index, 1);
                    setDepartmentList(departmentListTmp);
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
        const { infor, questionList, userId } = props.route.params;
        navigation.navigate('Create', { infor, questionList, departmentList, userId });
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
                            onPress={() => navigation.goBack()}
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
                    <Text style={styles.title}>Department</Text>
                    <Text style={styles.subText}>Add departments for your event.</Text>
                </View>
                <ScrollView style={styles.list}>
                    {departmentList.map((item, index) => (
                        <DepartmentItem
                            key={index}
                            name={item.name}
                            description={item.description}
                            number={index + 1}
                            onDeleteDepartment={() => handleDeleteDepartment(index)}
                        />
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <Form onAddDepartment={handleAddDepartment} />
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
        alignItems: 'center',
        paddingVertical: 8,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        color: colors.accent,
        fontWeight: '600',
    },
    subText: {
        marginVertical: 4,
        color: colors.text,
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
