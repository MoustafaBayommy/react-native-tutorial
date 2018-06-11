import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableHighlight
  } from 'react-native';
  

  const Button  = ({ style, children, ...otherProps }) => (
    <TouchableHighlight    style={[buttonStyles.core, buttonStyles.hairlineBorder, style]}   
     {...otherProps}   
      underlayColor="#efefef" 
         activeOpacity={0.8}  > 
            {children}  
            </TouchableHighlight>
)

  export default Button;


  Button.propTypes = {  style: TouchableHighlight.propTypes.style,
    children: PropTypes.node
 };

  const buttonStyles=StyleSheet.create({
    core:{
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