import React from 'react';

import PropTypes from 'prop-types';


import {
    View,
    TouchableOpacity,
    StatusBar,
    StyleSheet
    } from 'react-native';

    import Title from '../Components/Title';
    import AppText from '../Components/AppText';
    import * as globalStyles from '../styles/global';

    StatusBar.setBarStyle('light-content');

    const IntroScreen = ({ onPress }) => (
        <View style={[globalStyles.COMMON_STYLES.pageContainer,
        styles.container]}>
        <TouchableOpacity
        onPress={onPress}
        >
        <Title>React Native News Reader</Title>
        <AppText>
        Start Reading
        </AppText>
        </TouchableOpacity>
        </View>
        );

        IntroScreen.propTypes = {
            onPress: PropTypes.func.isRequired
            };

            IntroScreen.defaultProps={
                onPress:()=>{
                    navigate('Profile', { name: 'Jane' })
                }
            }

            const styles = StyleSheet.create({
                container: {
                marginBottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
                }
                });

    export default IntroScreen;