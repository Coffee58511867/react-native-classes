import React, { Component } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global';

export default class Card extends Component{

  render(){
    
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardContent}>
        { props.children }
      </View>
    </View>
  );
  };
};