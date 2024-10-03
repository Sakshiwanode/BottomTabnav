
import React, {useState}from 'react';
import{Text,Button,View,TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
enableScreens();


const Tab= createBottomTabNavigator();
const App = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Login" component={LoginScreen} />
    <Tab.Screen name="SignUp" component={SignUpScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
};




export default App;