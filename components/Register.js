import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: ""
    };
  }

  render() {
    const { username, email, phone, password } = this.state;

    const handleRegister = () => {
        try {
           console.log("Done"); 
           this.setState({username: "Maroba"});
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Create an account</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          value={username}
          onChangeText={value => this.setState({ username: value })}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={value => this.setState({ email: value })}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={value => this.setState({ phone: value })}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={value => this.setState({ password: value })}
        />
        <Text>{username}</Text>
        <CustomButton text="Create Account" onPress={handleRegister}/> 
      </View>
    );
  }
}
