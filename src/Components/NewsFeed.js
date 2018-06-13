import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    ListView,
    StyleSheet,
    Modal,
    TouchableOpacity
} from 'react-native';


import { NewsItem } from './NewsItem'

import * as globalStyles from '../styles/global';

export default class NewsFeed extends Component {


    constructor(props) {
        super(props);
        this.ds = ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource:
                this.ds.cloneWithRows(props.news),
            modelVisible: false
        };

        this.renderRow.bind(this);
        this.openModel.bind(this);
        this.onModalClose.bind(this);
    }

    render() {

        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={this.props.listStyles}
                />
                {this.renderModal()}
            </View>
        )
    }


    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={() => this.openModel()}
                index={index}
                style={styles.newsItem}
                {...rowData}

            />
        )
    }

    renderModel() {

        return (
            <Modal visible={this.state.modelVisible}
                onRequestClose={this.onModalClose}
                animationType="slide"
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={this.onModalClose} style={styles.closeButton}        >
                        <SmallText>Close
                             </SmallText>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }


    openModel() {
        this.setState({
            modelVisible: true
        })
    }


    closeModel() {
        this.setState({
            modelVisible: false
        })
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
}



NewsFeed.defaultProps = {
    news: [{
        title: 'React Native',
        imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
        description: 'Build Native Mobile Apps using JavaScript and React',
        date: new Date(),
        author: 'Facebook',
        location: 'Menlo Park, California',
        url: 'https://facebook.github.io/react-native'
    }, {
        title: 'Packt Publishing',
        imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png',
        description: 'Stay Relevant',
        date: new Date(),
        author: 'Packt Publishing',
        location: 'Birmingham, UK',
        url: 'https://www.packtpub.com/'
    }]
};


const styles = StyleSheet.create({
    newsItem:
        {
             marginBottom: 20 
        },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    }, closeButton:
        {
            paddingVertical: 5,
            paddingHorizontal: 10,
            flexDirection: 'row'
        }
});

