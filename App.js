import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import Icon from "react-native-vector-icons/FontAwesome";

import { CulturesComposers } from './components/CulturesComposers';
import { HomeScreen } from './components/HomeScreen';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    // Search: ExploreScreen,
    // Chat: ChatScreen, 
    Learn: {
      screen: CulturesComposers,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info" size={25} color={tintColor} />
        )
      }
    },
    // Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);