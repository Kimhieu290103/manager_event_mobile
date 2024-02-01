import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import {event as EventRepository } from '../../repositories'
import { useNavigation } from '@react-navigation/native'

export default function Category() {
    const [categories, setCategories] = useState([
        {
            name: 'Fundraising',
            icon: require('../../assets/icons/category/fundraising.png'),
        },
        {
            name: 'Social',
            icon: require('../../assets/icons/category/social-media.png'),
        },
        {
            name: 'Virtual',
            icon: require('../../assets/icons/category/vr.png'),
        },
        {
            name: 'Festivals',
            icon: require('../../assets/icons/category/concert.png'),
        },
        {
            name: 'Community',
            icon: require('../../assets/icons/category/community.png'),
        },
        {
            name: 'Pop-up',
            icon: require('../../assets/icons/category/pop-up.png'),
        },
        {
            name: 'Other',
            icon: require('../../assets/icons/category/other.png'),
        },
    ])

    const navigation = useNavigation()
    const handleFilter = async (filter) => {
        navigation.navigate('EventType', {filter: filter, userId: 1})
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    handleFilter(item.name)
                }}
                style={styles.categoryItem}
            >
                <View style={styles.shape} />
                <Image source={item.icon} style={styles.img} />
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories </Text>
            </View>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 10
    },
    header: {
        padding: 10,
        paddingBottom: 0,
    },
    title: {
        color: colors.accent,
        fontWeight: '700',
        fontSize: 22
    },
    categoryItem: {
        marginTop: 10,
        width: 130,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        margin: 8,
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: 'rgba(0, 0, 0, 0.1)', // iOS shadow color
        shadowOpacity: 0.5, // iOS shadow opacity
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        overflow: 'hidden',
        borderWidth: 0.4,
        borderColor: colors.dark_gray,
    },
    shape: {
        width: 150,
        height: 150,
        backgroundColor: colors.bule_light,
        borderRadius: 100,
        position: 'absolute',
        top: -50
    },
    img: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 18,
        marginTop: 16,
        color: colors.accent,
        fontWeight: '600',
    },
})
