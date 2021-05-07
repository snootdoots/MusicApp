import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { TwoPaths } from './TwoPaths';
import Composers from "./Composers";
import Cultures from "./Cultures";

const Stack = createStackNavigator();

class CulturesComposers extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          navigationOptions={{
            headerStyle: {borderBottomWidth: 0}
          }}>

          <Stack.Screen name="TwoPaths" component={TwoPaths}
            options={{
            cardStyle: {backgroundColor: "white"},
            headerStyle: {backgroundColor: "white", borderBottomWidth: 0}
          }}/>

          <Stack.Screen name="Composers" component={Composers}/>
          <Stack.Screen name="Cultures" component={Cultures}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export { CulturesComposers }