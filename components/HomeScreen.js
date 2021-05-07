import React, { Component } from "react"
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { styles } from "./Styles";

class HomeScreen extends React.Component {
    render() {
        return(
            <Text>Hi</Text>
        )
    }
}

export { HomeScreen }