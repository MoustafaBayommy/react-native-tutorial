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
import TabNavigator from 'react-native-tab-navigator';

// import NewsFeed from './src/Components/NewsFeed'

import  NewsFeed  from './src/Components/NewsFeed'
import Search from './src/Components/Search'
import SliderSwitch from './src/Components/Slider-Switch'
import Countly  from './src/screens/Countly'
import * as globalStyles from './src/styles/global';

import FlexBoxLayout from './src/Components/tutorials/flexBoxLayout'




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {


  
state={
  selectedTab:   'Search'
}

  render() {
    return (
      <View style={styles.container}>
 
     <TabNavigator>
     <TabNavigator.Item
       selected={this.state.selectedTab === 'NewsFeed'}
       title="NewsFeeds"
      //  renderIcon={() => <Image source={...} />}
      //  renderSelectedIcon={() => <Image source={...} />}
       badgeText="1"
       onPress={() => this.setState({ selectedTab: 'NewsFeed' })}>
       <Countly />
     </TabNavigator.Item>
     
     <TabNavigator.Item
       selected={this.state.selectedTab === 'Search'}
       title="Profile"
      //  renderIcon={() => <Image source={...} />}
      //  renderSelectedIcon={() => <Image source={...} />}
      //  renderBadge={() => <CustomBadgeView />}
       onPress={() => this.setState({ selectedTab: 'Search' })}>
       <Search/>
       </TabNavigator.Item>
   </TabNavigator>
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