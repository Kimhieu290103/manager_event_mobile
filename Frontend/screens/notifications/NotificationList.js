import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../constants/colors'
import NotificationItem from '../../components/NotificationItem'
import { useSafeArea } from '../../utils/helpers/Device'
import { notification as NotificationRepository } from '../../repositories'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    user: state.user,
});

const NotificationList = ({ user })=>{
    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([
        {
            name: 'All',
            param: 3
        },
        {
            name: 'Verified',
            param: 0
        },
        {
            name: 'Event',
            param: 1
        },
        {
            name: 'Deadline',
            param: 2
        }
    ])
    const [activeIndex, setActiveIndex] = useState(0)

    const fetchNotifications = async () => {
        try {
            startSpinner()

            const responseNotifications = await NotificationRepository.getNotifications(user.id, categories[activeIndex].param)

            setNotifications(responseNotifications.rows)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
            stopSpinner()
        }
    }

    const read = async (noti_id) => {
        console.log('Call')
        try {
            await NotificationRepository.readNotification(noti_id)
            const responseNotifications = await NotificationRepository.getNotifications(user.id, categories[activeIndex].param)
            setNotifications(responseNotifications.rows)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNotifications()
    }, [activeIndex])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setActiveIndex(index)
                }}
                style={[
                    styles.categoryItem,
                    index === activeIndex && styles.activeCategoryItem
                ]}
            >
                <Text style={[styles.categoryText, index === activeIndex && styles.activeCategoryText]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.container, { paddingTop: useSafeArea() }]}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : (
                <>
                    <FlatList
                        data={categories}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        style={styles.category}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                    />
                    <View style={styles.list}>
                        <FlatList
                            data={notifications}
                            renderItem={({ item }) => (
                                <NotificationItem
                                    notification={item} key={item.id}
                                    onPress={() => {
                                        read(item.id)
                                    }}
                                />
                            )}
                            keyExtractor={(eachNotification) => eachNotification.id.toString()}
                        />
                    </View>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white
    },
    category: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingStart: 10,
    },
    categoryItem: {
        backgroundColor: colors.white,
        marginHorizontal: 4,
        height: 36,
        minWidth: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: colors.dark_gray
    },
    activeCategoryItem: {
        backgroundColor: colors.primary,
        borderColor: colors.primary
    },
    categoryText: {
        color: colors.text,
        fontWeight: '600',
        fontSize: 16,
    },
    activeCategoryText: {
        color: colors.white,
    },
    list: {
        flex: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default connect(mapStateToProps)(NotificationList);
