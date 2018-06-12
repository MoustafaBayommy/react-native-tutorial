import React from 'react';
import PropTypes from 'prop-types';

import {Text} from 'react-native';
import * as globalStyles from '../styles/global';

const AppText=({childern,style,...rest})=>(
<Text  style={[globalStyles.COMMON_STYLES.text,style]} {...rest}>
{childern}
</Text>
)


AppText.protoTypes={
    style:Text.propTypes.style,
    childern:PropTypes.node
}

export  default AppText;