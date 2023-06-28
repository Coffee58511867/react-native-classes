import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default class CustomButton extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={globalStyles.btn}>
          <Text style={globalStyles.btnText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
