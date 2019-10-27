import React, { Component } from 'react';
import Menu from '../navigation/NavigationMenu';
import { ContentPreview } from '../components/Previews';


import { Text, View, StyleSheet, ScrollView, } from 'react-native'
import { Card } from 'react-native-elements'

import 'whatwg-fetch'
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        fontSize: 42,
        textAlign: 'center'
    },
    scrollView: {
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 110
    },
});


export default class SavedScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { contents: [] }
        fetch('http://192.168.43.104:8000/actualusers/kockahonza/')
          .then(response => response.json())
          .then(responseJson => this.setState({ contents: responseJson['favourites'] }));
    }

    render() {
        return(
            <View>
            <Menu/>
            <ScrollView style={styles.scrollView}>
            { this.state.contents.map(function (content, i) {
                return <ContentPreview id={content}/>
            })}
            </ScrollView>
            </View>
        );
    }
}

SavedScreen.navigationOptions = {
  header: null,
}
