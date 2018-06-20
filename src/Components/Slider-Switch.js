import React, { Component } from 'react';
 import {  View,  Slider,
    Switch 
    ,StyleSheet,Alert,Vibration 
,
StatusBar 
} from 'react-native';

 import * as globalStyles from '../styles/global';



 export default class  SliderSwitch extends Component{

    state={
        searchText:''
    }
 
 render=()=>
 {
    StatusBar.setBarStyle('dark-content');
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => Vibration.vibrate()},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    
    return (
     <View  style={globalStyles.COMMON_STYLES.pageContainer}>
         <View style={styles.search}>
           <Slider  
           />
           <Switch/>
        </View>
    </View>
 )
}
 }
 ;


 const styles=StyleSheet.create({
    input: {
        color: globalStyles.TEXT_COLOR,
        height:50,
        paddingHorizontal: 20,
        flex: 1
    },
    search: {    borderColor: globalStyles.MUTED_COLOR,    flexDirection: 'row',    alignItems: 'center',    borderRadius: 5,    borderWidth: 1,    marginTop: 10,    marginBottom: 5  } 
 });