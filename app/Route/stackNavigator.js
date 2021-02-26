import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from '../screens/StartScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Review from '../screens/Review';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const ReviewStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reviews" component={Review} />
    </Stack.Navigator>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, HomeStackNavigator, ReviewStackNavigator }