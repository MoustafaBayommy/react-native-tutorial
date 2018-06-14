import React from 'react';
import PropTypes from 'prop-types';
import {Text,StyleSheet} from 'react-native';
import AppText from './AppText';

import * as globalStyles from '../styles/global';

const Title=({childern,style})=>(
<AppText  style={[styles.title,style]}>
{childern}
</AppText>
)


Title.protoTypes={
    style:Text.propTypes.style,
    childern:PropTypes.node
}

const styles=StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
        }

})


export  default Title;