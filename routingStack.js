/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


//import screens
import Landing from './src/screens/landing';
import Auth from './src/screens/auth';
import Home from './src/screens/home';
import SignUp from './src/screens/signup';
import WithEmailOrPassword from './src/screens/withEmailOrPassword';
import Save from './src/screens/save';

export default function routingStack(){
    return (
        <NavigationContainer>
            <Route />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();


function Route(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing"
             options={{
                 headerShown: false,
             }}
             component={Landing} />

            <Stack.Screen name="Auth"
             options={{
                 headerShown: false,
             }}
             component={Auth} />

            <Stack.Screen name="Home"
             options={{
                 headerShown: false,
             }}
             component={Home} />

            <Stack.Screen name="SignUp"
             options={{
                 headerShown: false,
             }}
             component={SignUp} />

            <Stack.Screen name="WithEmailOrPassword"
             options={{
                 headerShown: false,
             }}
             component={WithEmailOrPassword} />

            <Stack.Screen name="Save"
             options={{
                 headerShown: false,
             }}
             component={Save} />

        </Stack.Navigator>
    );
}
