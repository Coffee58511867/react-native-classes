import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Register from './components/Register';

const Stack = createStackNavigator();


export default class App extends Component {
  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator   initialRouteName="Home"        screenOptions={{
          headerStyle: {
            backgroundColor: "#0080ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}> 
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
