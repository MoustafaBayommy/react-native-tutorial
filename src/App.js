/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View,
} from 'react-native';

import nav from './navigation/nav'
import {
  createStackNavigator
} from 'react-navigation';

const RootStack = createStackNavigator(nav,{    initialRouteName: 'first',});




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default ()=>(
    <RootStack/>
    );
  
