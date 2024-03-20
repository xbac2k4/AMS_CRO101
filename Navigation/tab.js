import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import CartScreen from '../screen/CartScreen';
import NotificationScreen from '../screen/NotificationScreen';
import ContactScreen from '../screen/ContactScreen';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#0B0E15',
  }
}

const TabBottom = ({ route }) => {
  return (
    <KeyboardAvoidingView style={{
      flex: 1
    }} behavior='padding' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen initialParams={{ id: route.params?.id }} name='Home' component={HomeScreen} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/icons/home.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#DF7231' : '#45484F'
                    }} />
                  {/* <Text style={{fontSize:12, color:focused ? '#DF7231' : '#45484F'}}>Home</Text> */}
                </View>
              )
            }
          }} />
          <Tab.Screen name='My Favourite' component={FavouriteScreen} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/icons/heart.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#DF7231' : '#45484F'
                    }} />
                  {/* <Text style={{fontSize:12, color:focused ? '#DF7231' : '#45484F'}}>My Favourite</Text> */}
                </View>
              )
            }
          }} />
          <Tab.Screen initialParams={{ id: route.params?.id }} name='Cart' component={CartScreen} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/icons/shopping-cart.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#DF7231' : '#45484F'
                    }} />
                  {/* <Text style={{fontSize:12, color:focused ? '#DF7231' : '#45484F'}}>Cart</Text> */}
                </View>
              )
            }
          }} />
          <Tab.Screen initialParams={{ id: route.params?.id }} name='ContactScreen' component={ContactScreen} options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={require('../assets/icons/customer-service.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#DF7231' : '#45484F'
                    }} />
                  {/* <Text style={{fontSize:12, color:focused ? '#DF7231' : '#45484F'}}>Notification</Text> */}
                </View>
              )
            }
          }} />
          {/* <Tab.Screen name='Setting' component={HomeScreen3}/> */}
        </Tab.Navigator>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default TabBottom

const styles = StyleSheet.create({})