import { Component } from "react";
import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default class HomeScreen extends Component {
    render() {
      return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.text}>Dashboard Screen</Text>
        </View>
      );
    }
  }