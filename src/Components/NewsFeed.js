import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    ListView,
    StyleSheet,
    Modal,
    TouchableOpacity,
    WebView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


import  NewsItem  from './NewsItem'
import SmallText from './SmallText'

import * as globalStyles from '../styles/global';


export default class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource:
            this.ds.cloneWithRows(props.news),
            modelVisible: false,
            modalUrl: '',
            initialLoading: true,
            refreshing: false
        };

        this.renderRow.bind(this);
        this.openModel.bind(this);
        this.closeModel.bind(this);
        this.refresh = this.refresh.bind(this); 
    }

    componentWillMount() {  
        this.refresh(); 
    }

    componentWillReceiveProps(nextProps) {  
        this.setState({ 
           dataSource: this.state.dataSource.cloneWithRows(nextProps.news) ,
           initialLoading: false
         }); 
        }

        refresh() {
            if (this.props.loadNews) {    this.props.loadNews();  } 
        }



    render() {

        return
        (initialLoading && showLoadingSpinner
            ? (
            <View style={[listStyles, styles.loadingContainer]}>
            <ActivityIndicator
            animating
            size="small"
            {...this.props}
            />
            </View>
            ) :
        
        (
            <View style={styles.container}>>

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
                onPress={() => this.openModel(rowData.url)}
                index={index}
                style={styles.newsItem}
                {...rowData}

            />
        )
    }

    renderModal() {

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
                    <WebView />
                </View>
            </Modal>
        )
    }


    openModel(url) {
        this.setState({
            modelVisible: true,
            modalUrl:url
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
    listStyles: View.propTypes.style,
    loadNews: PropTypes.func,
    showLoadingSpinner: PropTypes.bool
}



NewsFeed.defaultProps = {
    showLoadingSpinner: true,
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
        },
        container: {
            flex: 1
            },
            loadingContainer: {
            alignItems: 'center',
            justifyContent: 'center'
            }
});

