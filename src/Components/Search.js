import React, { Component } from 'react';
 import {  View,  TextInput,StyleSheet} from 'react-native';

 import * as globalStyles from '../styles/global';

 import NewsFeed from './NewsFeed';

 export default class  Search extends Component{

    constructor(props){
        super(props);
        this.searchNews = this.searchNews.bind(this);
    }

    state={
        searchText:''
    }


    searchNews(text) {
        this.setState({ searchText: text });
        this.props.searchNews(text);
        }
 
 render=()=>
 (
     <View  style={globalStyles.COMMON_STYLES.pageContainer}>
         <View style={styles.search}>
           <TextInput  
           placeholder={'Search'}
           placeholderTextColor={globalStyles.MUTED_COLOR}
           onChangeText={this.searchNews}
           style={styles.input}
        //    keyboardType ="phone-pad"
           secureTextEntry
           />
        </View>

        <NewsFeed news={this.props.filteredNews} listStyles={{}} showLoadingSpinner={false} />
    </View>
 )

 }
 ;


 Search.propTypes = {   
    filteredNews: PropTypes.arrayOf(PropTypes.object),
    searchNews: PropTypes.func.isRequired
    };

 const styles=StyleSheet.create({
    input: {
        color: globalStyles.TEXT_COLOR,
        height:50,
        paddingHorizontal: 20,
        flex: 1
    },
    search: {    borderColor: globalStyles.MUTED_COLOR,    flexDirection: 'row',    alignItems: 'center',    borderRadius: 5,    borderWidth: 1,    marginTop: 10,    marginBottom: 5  } 
 });