import React, { Component } from 'react';
import Menu from '../navigation/NavigationMenu';

import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import { Card, Text } from 'react-native-elements'

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


class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Hello", title_picture_url: "", text: "Ahoj" };
        fetch('http://192.168.43.104:8000/articles/' + props["id"])
          .then(response => response.json())
          .then(responseJson => this.setState({
              title: responseJson["title"],
              title_picture_url: responseJson["title_picture_url"],
              text: responseJson["text"]
          }));
    }

    render() {
        return(
            <Card
            title={<Text h4 style={{fontSize: 42, textAlign: 'center'}}>{this.state.title}</Text>}
            image={<Image
                source={{ uri: this.state.title_picture_url }}
                style={{ width: Dimensions.get('window').width , height: 200}}/>}>
            <Text style={{marginBottom: 10}}>
            { this.state.text }
            </Text>
            </Card>  
        )
    }
}


export default class SavedScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { contents: [4, 5] }
    }

    render() {
        return(
            <View>
            <Menu/>
            <ScrollView style={styles.scrollView}>
            { this.state.contents.map((id_) => <ArticlePreview id={id_}/>) }
            </ScrollView>		
            </View>
        );
    }
}

SavedScreen.navigationOptions = {
  header: null,
};
