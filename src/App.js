/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import  HomeScreen  from './src/screens/HomeScreen';
import nav from './navigation/nav'

const RootStack = createStackNavigator(nav);




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default ()=>(
  <View>
    <RootStack/>
    </View>
    );
  
