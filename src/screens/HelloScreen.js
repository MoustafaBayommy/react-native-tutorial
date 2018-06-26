

import React from 'react';
import { Button, View, Text } from 'react-native';

export default ({navigation})=>(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'grey'}}>
    <Button
          title="Go to Second screen"
          onPress={() =>navigation.navigate('second')}
        />     

           <View style={{ marginTop: 50,}}>
            <Button 
          title="Test Connection"
          onPress={() =>navigation.navigate('ConnectioTest')}
        />    

        </View>
</View>
)