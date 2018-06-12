import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text
  } from 'react-native';



  const BOXModelDemo=()=>(
      <View style={styles.main}>
     <Text style={styles.content}>
     First
     </Text>
     <Text style={styles.content}>
     Second
     </Text>

     <Text style={styles.content}>
     Second
     </Text>

          </View>
  )

export default BOXModelDemo;
  const styles=StyleSheet.create({
    main: {  
        flex: 1,   
         paddingVertical: 20, 
        flexDirection: 'row'
        // , 
              //  flexWrap: 'wrap'  
            }, 
             content: {   
                padding: 20,  
                margin: 0,  
                backgroundColor: '#ef4c',  
                width: 125,    height: 125, 
                borderWidth: 1,
                borderColor: 'red',
                textAlign: 'center'
            }
  });