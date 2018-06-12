
import React from 'react';

import {View,
Text,StyleSheet
} from 'react-native';


const FlexBoxLayout=()=>(
<View style={styles.container}>


<View style={[styles.item,{alignSelf:'stretch',width: undefined}]}>

</View>

<View style={[styles.item,{alignSelf:'stretch',width: undefined,backgroundColor:'grey'}]}>

</View> 

<View style={[styles.item,{alignSelf:'stretch',width: undefined,flex: 1,backgroundColor:'cyan'}]}>

</View>       
      

</View>
)

export default FlexBoxLayout;

const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'flex-start',   
        
    },
    item:{
        backgroundColor:'lightgoldenrodyellow',
        borderWidth: 1,
        borderColor: 'goldenrod',
        height:150,
        width:150

    }
})
