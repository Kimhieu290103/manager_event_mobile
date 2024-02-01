import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import UserApplyItem from "../../components/UserApplyItem"
import colors from "../../constants/colors"
const api = require("../../repositories/index")

const ListUserApply = ({route}) => {
    const event_id = route.params.event_id
    console.log(event_id)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const fetchAPI = async () => {
                const response = await api.form.getListUserApply(event_id)
                setData(response)
                console.log(response)
            }
            fetchAPI()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List member apply</Text>
            {data.length === 0 || loading ? (
                <View>
                    <Text style={styles.noApply}>
                        There are currently no members applying
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <UserApplyItem
                            data={item}
                            event_id={event_id}
                            key={item.id}
                            onPress={() => {
                                alert(`You press item's name: ${item.title}`)
                            }}
                        />
                    )}
                    keyExtractor={(eachNotification) => eachNotification.id}
                />
            )}
        </View>
    )
}

export default ListUserApply

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.accent,
        marginBottom: 10,
        marginTop: 20,
    },
    noApply: {
        marginTop: 200,
        fontSize: 15,
        color: colors.dark_gray,
    },
})
