import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Thumble from './Thumble';
import Byline from './ByLine';
import AppText from './AppText';
import * as globalStyles from '../styles/global';



export default class NewsItem extends Component {


    render = () => {
        const {
            style,
            imageUrl,
            title,
            author,
            date,
            location,
            description,
            onPress,
            accentColor
        } = this.props;
        return (
            <TouchableOpacity
                style={style}
                onPress={onPress}
            >
                <View>
                    <Thumble
                        url={imageUrl}
                        titleText={title}
                        accentColor={accentColor}
                        style={styles.thumbnail}
                    />
                    <View style={styles.content}>
                        <Byline
                            author={author}
                            date={date}
                            location={location}
                        />
                        <AppText>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string,
    index: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    style: View.propTypes.style,
    onPress: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});