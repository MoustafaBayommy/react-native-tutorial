import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,View
  } from 'react-native';
  

  const Header  = ({ style, children, ...otherProps }) => (
    <View    style={[headerStyles.core, style]}   
     {...otherProps}   
     > 
            {children}  
            </View>
)

  export default Header;


  Header.propTypes = {  style: View.propTypes.style,
    children: PropTypes.node
 };

  const headerStyles=StyleSheet.create({
    core:{
  flexDirection:'row', 
  
  borderStyle: 'solid',
  borderColor: '#d5d5d5',
  borderWidth: 1,
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: 3,
  paddingLeft: 5,
  paddingRight: 5
    },
    hairlineBorder: {
            borderWidth: StyleSheet.hairlineWidth  
    }
  })