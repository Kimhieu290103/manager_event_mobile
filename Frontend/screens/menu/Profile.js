import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import EventItem from '../../components/EventItem'
import { event as EventRepository } from '../../repositories'
import { useNavigation } from '@react-navigation/native'
import { startSpinner, stopSpinner } from '../../utils/helpers/startSpinner'
import Loading from '../../components/Loading'

export default function Profile({route}) {
    const user = route.params.user
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        startSpinner()
        try {
            const fetchData = async () => {
                try {
                    const response = await EventRepository.getListEventTakePartIn(user.id);
                    setEvents(response)
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                    stopSpinner()
                }
            }
        
            fetchData()
        } catch (error) {
            console.log(error)
        }
    },[user])

    const navigation = useNavigation()
    const handleActivity = (event, leaderId) => {
        navigation.navigate('GetTask', {event: event, userId: user.id, leaderId})
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/bg_haikei.png')}
                style={styles.top}
            >
                <View style={styles.content}>
                    <Image source={{uri: user.avatar}} style={styles.avatar}/>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
                <View style={styles.infor}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginTop: 16}}>02 <Text style={{fontWeight: '400'}}>Attending</Text> </Text>
                    <Text style={{fontSize: 14, fontWeight: '600', marginTop: 16}}>12 <Text style={{fontWeight: '400'}}>Events</Text></Text>
                </View>
            </ImageBackground>
            <View style={styles.list}>
            {events.length != 0 ?
            (
                <FlatList
                data={events}
                renderItem={({item}) => 
                    <EventItem 
                        event={item} key={item.id}
                        onPress={() => {handleActivity(item, item.createdBy)}}
                    />
                }
                keyExtractor={eachEvent => eachEvent.id}
            />
            ) : (
                <View style={{width : "100%", justifyContent : "center", alignItems : "center"}}>
                    <Text style={styles.noEvent}>Hiện tại đang không tham gia sự kiện nào</Text>
                </View>
            )
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colors.white
    },
    top: {
        paddingTop: 50,
        height: '100%',
        width: 200,
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: colors.dark_gray,
        borderRadius: 20
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10
    },
    avatar: {
        width: 110,
        height: 110,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: colors.white
    },
    username: {
        marginVertical: 6,
        fontSize: 18,
        fontWeight: '700',
        color: colors.accent
    },
    name: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.accent,
        paddingTop: 20,
    },
    infor: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 2.5,
    },
    list: {
        flex: 6,
        width: '100%',
    },
    noEvent : {
        marginTop : 200,
        color : colors.dark_gray,
        fontSize : 18,
    },
})