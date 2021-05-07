import React, { Component } from "react"
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { styles } from "./Styles";

export default class Composers extends Component{
    render(){
        return(
            // import all composers from database into here

            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>Composers</Text>

                    <Button style={styles.button}
                        color="#959595"
                        title="Go Back"
                        onPress={() => this.props.navigation.goBack()}>
                    </Button>
                </View>
            </View>
        )
    }
}