import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";

export default class CustomInput extends Component{ 
    render(){
    const { placeholder, value, onChangeText, keyboardType} = this.props;
    return(
        <View>
            <TextInput style={globalStyles.input} 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}     
            />
        </View>
    );
    };
}
