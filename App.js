/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={viewStyle}>
        <Text style={textStyele}>
         Welcome To Bianaat E-Commerce 
        </Text>
        
        <TouchableHighlight 
       underlayColor="#60b044cc"
       activeOpacity={.1}
        onPress={() => {}}
        style={[btn, btnPrimary]}>
<Text>get Started</Text>
</TouchableHighlight>
        {/* <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const viewStyle={
  backgroundColor: 'grey',
   flex: 1,
    justifyContent: 'center',
  alignItems: 'center'
}

const textStyele={
color:'#fff',
fontSize:20
}

const btn = {
  borderStyle: 'solid',
  borderColor: '#d5d5d5',
  borderWidth: 1,
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: 3,
  paddingLeft: 5,
  paddingRight: 5
  };
  const btnPrimary = {
  backgroundColor: 'cyan',
  borderColor: '#000'
  };