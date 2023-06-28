import { Component } from "react";
import React from "react";
import { View, Text, Button } from "react-native";
import CustomButton from "../shared/button";

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <CustomButton
          text="Go to Register Screen"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <CustomButton 
        text="Go to Dashboard Screen"
         onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        </View>
      );
    }
  }