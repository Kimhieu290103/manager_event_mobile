import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskDetail from '../../components/TaskDetail'
import colors from '../../constants/colors'
import NotificationItem from '../../components/NotificationItem'
import { notification as NotificationRepository } from '../../repositories'
import { useSafeArea } from '../../utils/helpers/Device'
import { activity as ActivityRepository } from '../../repositories'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function MyTasks({ route }) {
    const userId = route.params.userId
    const status = 2
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        startSpinner()
        ActivityRepository.getMyTasks(userId, status)
            .then((res) => {
                setTasks(res.rows)
            })
            .catch((error) => {
                throw error
            })
            .finally(() => {
                setLoading(false)
                startSpinner()

            })
    }, [])

    const handleTaskCompleted = (status, activity_id, candidate_id) => {
        ActivityRepository.taskCompleted(status, activity_id, candidate_id)
        .then(res => {
            Alert.alert('Successfully!')
        })
        .catch(err => {
            Alert.alert('Something went wrong!')
        })
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => 
                    <TaskDetail 
                        task={item} 
                        handleTaskCompleted={(status, activity_id, candidate_id) =>
                            handleTaskCompleted(status, activity_id, candidate_id)
                        }
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
    },
})
