import React, { Component } from 'react';
 import {  View,  TextInput,StyleSheet} from 'react-native';

 import * as globalStyles from '../styles/global';



 export default class  Search extends Component{

    state={
        searchText:''
    }
 
 render=()=>
 (
     <View  style={globalStyles.COMMON_STYLES.pageContainer}>
         <View style={styles.search}>
           <TextInput  
           placeholder={'Search'}
           placeholderTextColor={globalStyles.MUTED_COLOR}
           onChangeText={text => this.setState({ searchText: text })}
           style={styles.input}
        //    keyboardType ="phone-pad"
           secureTextEntry
           />
        </View>
    </View>
 )

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