import { Component } from "react";
import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Register Screen"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        </View>
      );
    }
  }