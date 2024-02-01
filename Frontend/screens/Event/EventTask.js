import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { activity as ActivityRepository } from '../../repositories'
import colors from '../../constants/colors'
import formatDateTime from '../../utils/helpers/formatDate'
import icons from '../../constants/icons'
import { useNavigation } from '@react-navigation/native'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function EventTask({ route }) {
    const eventId = route.params.eventId
    const [taskData, setTaskData] = useState(null)
    const [status, setStatus] = useState()
    const [delivered, setDelivered] = useState()
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const categories = [
        {
            name: 'All',
        },
        {
            name: 'Finished',
            delivered: 1,
            status: 1,
        },
        {
            name: 'Unfinished',
            delivered: 1,
            status: 0,
        },
        {
            name: 'Delivered',
            delivered: 1,
            status: 0,
        },
        {
            name: 'Not delivered',
            delivered: 0,
            status: 0,
        },
    ]

    useEffect(() => {
        fetchData()
    }, [status, delivered, eventId])

    const fetchData = async () => {
        try {
            startSpinner()
            const data = await ActivityRepository.getTaskEvent(eventId, status, delivered)
            setTaskData(data.rows)
        } catch (error) {
            console.error(error)
        } finally {() => {
            setLoading(false)
            stopSpinner()
        }}
    }

    setTimeout(() => {
        stopSpinner(),
        setLoading(false)
    }, 3000)

    const handleCategoryPress = (index) => {
        const selectedCategory = categories[index]
        setStatus(selectedCategory.status)
        setDelivered(selectedCategory.delivered)
        setSelectedCategoryIndex(index)
    }

    const renderCategoryItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => handleCategoryPress(index)}
            style={[
                styles.categoryItem,
                index === selectedCategoryIndex && styles.selectedCategoryItem,
            ]}
        >
            <Text style={index === selectedCategoryIndex && styles.selectedCategoryText}>{item.name}</Text>
        </TouchableOpacity>
    )

    const navigation = useNavigation()
    const handleCreateTask = () => {
        navigation.navigate("CreateTask", {
            event: taskData[0].Event,
            userId: route.params.userId,
            leaderId: route.params.userId,
        })
    }

    if(loading) {
        return (
            <Loading/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderCategoryItem}
            />
            {taskData && (
                <FlatList
                    data={taskData}
                    renderItem={({ item }) => (
                        <View style={styles.taskItem}>
                            <View style={styles.content}>
                                <Text style={styles.task}>{item.content}</Text>
                                <Text style={styles.dealine}>Deadline: {formatDateTime(item.date_end)}</Text>
                                { (item.Candidate) ? (
                                    <View style={styles.user}>
                                        <Image style={styles.avatar} source={{uri: item.Candidate.User.avatar}} />
                                        <View style={{
                                            justifyContent: 'center',
                                        }}>
                                            <Text style={styles.text}><Text style={{fontWeight: '600'}}>Name:</Text> {item.Candidate.User.name}</Text>
                                            <Text style={styles.text}><Text style={{fontWeight: '600'}}>Email:</Text> {item.Candidate.User.gmail}</Text>
                                            <Text style={styles.text}><Text style={{fontWeight: '600'}}>Phone:</Text> {item.Candidate.User.telephone}</Text>
                                        </View>
                                    </View>
                                ) : (
                                    <></>
                                )}
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                />
            )}
            <TouchableOpacity 
                style={{
                    position: 'absolute',
                    backgroundColor: colors.primary,
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 100, 
                    right: 30
                }}
                onPress={handleCreateTask}
            
            >
                <Image source={icons.add} style={{
                    tintColor: colors.white,
                    width: 40,
                    height: 40
                }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 6,
    },
    categoryItem: {
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 8,
        minWidth: 100,
        margin: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        borderColor: colors.dark_gray        
    },
    selectedCategoryItem: {
        backgroundColor: colors.primary
    },
    selectedCategoryText: {
        color: '#ffffff'
    },
    taskItem: {
        backgroundColor: colors.white,
        padding: 8,
        marginVertical: 8,
        borderRadius: 8,
        flexDirection: 'row'
    },
    list: {
        height: '100%',
    },
    content: {
        flex: 7,
        padding: 6
    },
    task: {
        fontSize: 18,
        color: colors.accent,
        fontWeight: '600'
    },
    dealine: {
        fontSize: 14,
        color: colors.secondary,
        marginVertical: 6,
        fontWeight: '600'
    },
    user: {
        flexDirection: 'row',
        width: '100%'
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 8,
        marginEnd: 8
    }, 
    text: {
        color: colors.text
    }
})
