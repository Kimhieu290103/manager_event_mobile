import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'

export default function Form(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleAddDepartment = () => {
        if (name.trim().length === 0 || description.trim().length === 0) {
            alert('Please enter department name and description.')
        } else {
            props.onAddDepartment({ name, description })
            setName('')
            setDescription('')
            Keyboard.dismiss()
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TextInput
                placeholder="Department's name"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                placeholder="Department's description"
                style={styles.input}
                onChangeText={(text) => setDescription(text)}
                value={description}
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddDepartment}>
                <Text style={styles.btnText}>Add Department</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.dark_gray,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 4,
        fontSize: 16,
    },
    btn: {
        backgroundColor: colors.primary,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 4,
    },
    btnText: {
        textAlign: 'center',
        color: colors.white,
    },
})
