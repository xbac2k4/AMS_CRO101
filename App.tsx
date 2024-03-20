import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screen/LoginScreen'
import WelcomeScreen from './screen/WelcomeScreen'
import RegisterScreen from './screen/RegisterScreen'
import HomeScreen from './screen/HomeScreen'
import TabBottom from './Navigation/tab';
import ProductDetailsScreen from './screen/ProductDetailsScreen';
import FavouriteScreen from './screen/FavouriteScreen';
import CartScreen from './screen/CartScreen';
import NotificationScreen from './screen/NotificationScreen';
import RatingForm from './screen/ContactScreen';
import ContactScreen from './screen/ContactScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TabBottom" component={TabBottom} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <TabBottom></TabBottom>
    // <LoginScreen></LoginScreen>
    // <RegisterScreen></RegisterScreen>
    // <HomeScreen></HomeScreen>
    // <ProductDetailsScreen></ProductDetailsScreen>
    // <FavouriteScreen></FavouriteScreen>
    // <CartScreen></CartScreen>
    // <RatingForm></RatingForm>
  )
}

export default App

const styles = StyleSheet.create({})