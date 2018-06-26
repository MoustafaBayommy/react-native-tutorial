

import React from 'react';
import {View,Button,Text } from 'react-native';


export default ({navigation})=>(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'red'}}>
<Text>Details Screen</Text>
<Button
          title="Go to Home... again"
          onPress={() =>navigation.popToTop()}
        />
</View>
)