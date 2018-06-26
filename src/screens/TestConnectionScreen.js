
import React from 'react';
import { View, Button, Text, NetInfo } from 'react-native';


export default class TestConnectionScreen extends React.Component {



    constructor(props) {
        super(props);
        this.handleConnectionChange = handleConnectionChange.bind(this);
    }




    componentWillMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this.handleConnectionChange
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.handleConnectivityChange);

    }

    state = {
        connected: false
    }


    handleConnectionChange(isConnected) {
        this.setState({ connected: isConnected });
    }


    render = () => (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: (this.state.connected ? 'green' : 'red') }}>
            this.state.connected?
(<Text>
                OnLine
    </Text>)
        
        :
(<Text>
                OffLine
    </Text>)
         </View>
    )

}
