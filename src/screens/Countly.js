import React, { Component } from 'react';
import { increment, decrement, zero } from '../store/actions';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Counter from '../Components/Counter'


import { Provider, connect } from 'react-redux';


import store from '../store/TallyStore'

const mapStateToProps = state =>{
    console.log(state);
    
    return  ({ count: state.countReducer.count })};

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    zero: () => dispatch(zero())
});

const CounterContainer = connect(  mapStateToProps,  mapDispatchToProps )(Counter); 

export default class Countly extends Component {



    render = () => (
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    )
}

