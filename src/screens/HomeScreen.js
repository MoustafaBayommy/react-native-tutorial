import React, { Component } from 'react';
import { increment, decrement, zero } from '../store/actions';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import NewsFeedContainer from '../containers/NewsFeedContainer';

import { Provider, connect } from 'react-redux';

import TabNavigator from 'react-native-tab-navigator';

import createStore from '../store/createStore';
import SearchContainer from '../containers/SearchContainer';


const store = createStore();


export default class App extends Component {


  
state={
  selectedTab:   'Search'
}

  render() {
    return (
    <Provider store={store}>

      <View style={styles.container}>
 
     <TabNavigator>
     <TabNavigator.Item
       selected={this.state.selectedTab === 'NewsFeed'}
       title="NewsFeeds"
      //  renderIcon={() => <Image source={...} />}
      //  renderSelectedIcon={() => <Image source={...} />}
       badgeText="1"
       onPress={() => this.setState({ selectedTab: 'NewsFeed' })}>
       <NewsFeedContainer />
     </TabNavigator.Item>
     
     <TabNavigator.Item
       selected={this.state.selectedTab === 'Search'}
       title="Profile"
      //  renderIcon={() => <Image source={...} />}
      //  renderSelectedIcon={() => <Image source={...} />}
      //  renderBadge={() => <CustomBadgeView />}
       onPress={() => this.setState({ selectedTab: 'Search' })}>
       <SearchContainer/>
       </TabNavigator.Item>
   </TabNavigator>
      </View>
      </Provider>
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

