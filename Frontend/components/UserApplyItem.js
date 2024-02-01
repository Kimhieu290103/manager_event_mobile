import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const truncateGmail = (gmail) => {
    const maxLength = 15; // Đặt chiều dài tối đa bạn muốn hiển thị
    if (gmail.length > maxLength) {
        return gmail.substring(0, maxLength) + '...';
    }
    return gmail;
};

const UserApplyItem = (props) => {
    const { data, event_id } = props;

    const navigation = useNavigation();

    const viewApplyPress = ()=>{
        navigation.navigate('Answer',{event_id : event_id, user_id : data.id})
    }
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={{uri : data.avatar}}
                    style={styles.avatar}
                />
                <View style={styles.mainInfo}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.label}>Name : </Text>
                        <Text style={styles.data}>{truncateGmail(data.name)}</Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.label}>Gmail : </Text>
                        <Text style={styles.data}>{truncateGmail(data.gmail)}</Text>
                    </View>
                    <View style={styles.smallContainer}>
                        <Text style={styles.label}>Tel : </Text>
                        <Text style={styles.data}>{data.telephone}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={viewApplyPress}
                >
                    <Text style={styles.buttonText}>Apply form</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserApplyItem;

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.white,
        borderWidth : 0.4,
        borderColor : colors.dark_gray,
        width : "95%",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 15,
        paddingVertical : 10,
        marginVertical : 7,
        marginHorizontal : 10,
        borderRadius : 6,
    },
    avatar : {
        height : 70,
        width : 70,
        borderRadius : 50,
    },
    infoContainer : {
        width : "75%",
        flexDirection : "row",
        alignItems : "center"
    },
    buttonContainer : {
        width : "25%",
        justifyContent : "center",
        paddingHorizontal : 5
    },
    mainInfo : {
        flexDirection : "column",
        marginLeft : 10,
    },
    smallContainer : {
        flexDirection : "row",
        width : "70%",
        alignItems : "center",
        overflow : "hidden",
        marginVertical : 2,
    },
    label : {
        width : "35%",
        fontSize : 14,
        fontWeight : "bold",
        color : colors.accent,
    },
    data : {
        width : "100%",
        fontSize : 14,
        color : colors.text,
    },
    button : {
        backgroundColor : colors.button,
        alignItems : "center",
        borderRadius : 6,
        paddingVertical : 5,
    },
    buttonText : {
        textAlign : "center",
        color : colors.white,
        fontWeight : "bold",
        paddingHorizontal : 5,
    }
});
