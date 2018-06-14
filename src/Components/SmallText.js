import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,Text} from 'react-native';
import AppText from './AppText';

import * as globalStyles from '../styles/global';

const SmallText=({childern,style})=>(
<AppText  style={[styles.small,style]}>
{childern}
</AppText>
)


SmallText.protoTypes={
    style:Text.propTypes.style,
    childern:PropTypes.node
}

const styles=StyleSheet.create({
    small: {
        fontSize: 11
        }

})


export  default SmallText;