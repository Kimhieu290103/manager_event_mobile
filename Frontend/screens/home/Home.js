import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeArea } from '../../utils/helpers/Device'
import colors from '../../constants/colors'
import Slider from './Slider'
import HotEvent from '../Event/HotEvent'
import Category from './Category'
import { connect } from 'react-redux'
import { useRoute } from '@react-navigation/native'

const mapStateToProps = (state) => ({
    user: state.user,
});

const Home = ({user})=> {

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={{backgroundColor: colors.light_gray}}>
                <View style={[styles.header, {paddingTop: (useSafeArea() + 20)}]}>
                    <View style={styles.welcome}>
                        <Text style={styles.user}>Hello, {user.name}</Text>
                        <Text style={styles.slogan}>Elevate Your Events, Connect the Moments</Text>
                    </View>
                    <Image source={{uri: user.avatar}} style={styles.avatar}/>
                </View>
                <View style={styles.slider}>
                    <Slider/>
                </View>
                <Category/>
                <HotEvent user_id={user.id}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingBottom: 20,
    },
    welcome: {
        marginEnd: 20,
    },
    user: {
        color: colors.accent,
        fontWeight: '700',
        fontSize: 20
    },
    slogan: {
        color: colors.accent,
        marginTop: 2
    },
    avatar: {
        width: 58,
        height: 58,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: colors.bule_light,
        objectFit: 'cover'
    },
    slider: {
        width: '100%',
        height: 160,
    }
})

export default connect(mapStateToProps)(Home);