import React, { Component } from 'react';
import { increment, decrement, zero } from '../store/actions';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import NewsFeedContainer from '../containers/NewsFeedContainer';

import { Provider, connect } from 'react-redux';


import createStore from '../store/createStore';


const store = createStore();

export default()=>  (
        <Provider store={store}>
            <NewsFeedContainer />
        </Provider>
    )

