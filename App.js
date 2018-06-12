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

import Button from './src/Components/tutorials/button.js';
// import BoxModelDemo from './Components/BoxModelDemo.js';
import Header from './src/Components/tutorials/header.js';
import FlexBoxLayout from './src/Components/tutorials/flexBoxLayout.js';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header>
        <Text>B-Commerce</Text>

        </Header>
    <FlexBoxLayout></FlexBoxLayout>
      {/* <BoxModelDemo></BoxModelDemo>
    */}
        
        {/* <Button 
        onPress={() => {}}
        style={btnPrimary} >

<Text>get Started</Text>

</Button> */}
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
    flexDirection: 'column',
    flex: 1,
   
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


  const btnPrimary = {
  backgroundColor: 'cyan',
  borderColor: '#000'
  };