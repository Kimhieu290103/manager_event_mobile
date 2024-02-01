import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import icons from '../constants/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome, Login, SignUp, Profile, EventDetail, UpdatePassword, UpdateProfile, MyTasks, Question, Answer, MyEvent, MyEventDetail, CreateTask, ListUserApply, EditEvent, CreateQuestion, Department, Create, EventType, GetTask, EventTask } from '../screens'
import UITab from './UITab'
import ShowTaskDetail from '../screens/menu/ShowTaskDetail'


const Stack = createNativeStackNavigator();

export default function NavigationApp(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerTintColor: colors.accent,
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="UITab" component={UITab} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen
                    name="EventDetail"
                    component={EventDetail}
                    options={({ route }) => ({ title: route.params?.eventName || 'Event Detail' })}
                />
                <Stack.Screen
                    name="MyEventDetail"
                    component={MyEventDetail}
                    options={{ title: ''}}
                />
                <Stack.Screen
                    name="EditEvent"
                    component={EditEvent}
                    options={{ title: ''}}
                />
                <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{ title: 'Password' }} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{ title: 'Profile' }} />
                <Stack.Screen name="MyTasks" component={MyTasks} options={{ title: 'List task' }} />
                <Stack.Screen name="ShowTaskDetail" component={ShowTaskDetail} options={{ title: 'Show Task' }} />
                <Stack.Screen name="Question" component={Question} options={{ title: 'Apply form' }} />
                <Stack.Screen name="MyEvent" component={MyEvent} options={{ title: 'My Event' }} />
                <Stack.Screen name="CreateTask" component={CreateTask} options={{ title: 'CreateTask' }} />
                <Stack.Screen name="ListUserApply" component={ListUserApply} options={{ title: 'Member apply' }} />
                <Stack.Screen name="Answer" component={Answer} options={{ title: 'Candidate answer' }} />
                <Stack.Screen name="CreateQuestion" component={CreateQuestion} options={{headerShown: false}} />
                <Stack.Screen name="Department" component={Department} options={{headerShown: false}} />
                <Stack.Screen name="Create" component={Create} options={{headerShown: false}} />
                <Stack.Screen name="EventType" component={EventType} options={{ title: 'Event' }} />
                <Stack.Screen name="GetTask" component={GetTask} options={{ title: 'List Task Event' }} />
                <Stack.Screen name="EventTask" component={EventTask} options={{ title: 'List Task Event' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})
