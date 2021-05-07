import React, { Component } from "react"
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { styles } from "./Styles";

class TwoPaths extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>Cultures</Text>
                    <Button style={styles.button}
                        color="#959595"
                        title="Read More"
                        onPress={() => this.props.navigation.navigate("Cultures")}>
                    </Button>
                </View>

                <View style={styles.box}>
                    <Text style={styles.title}>Composers</Text>
                    <Button style={styles.button}
                        color="#959595"
                        title="Read More"
                        onPress={() => this.props.navigation.navigate('Composers')}>
                    </Button>
                </View>
            </View>
        )
    }
}

export { TwoPaths }