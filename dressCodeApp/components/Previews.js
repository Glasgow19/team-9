import React, { Component } from 'react';
import Menu from '../navigation/NavigationMenu';

import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
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


class ArticlePreview extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", title_picture_url: "", text: "" };
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


class EventPreview extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Hello", title_picture_url: "", text: "Ahoj" };
        fetch('http://192.168.43.104:8000/events/' + props["id"])
          .then(response => response.json())
          .then(responseJson => this.setState({
              title: responseJson["title"],
              description: responseJson["description"],
              date_time: responseJson["date_time"]
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
            { this.state.description }
            </Text>
            </Card>  
        )
    }
}


export class ContentPreview extends Component {
    constructor(props) {
        super(props);

        this.state = { id: props['id'], content_type: 'U' }
        fetch('http://192.168.43.104:8000/contents/' + this.state.id)
          .then(response => response.json())
          .then(responseJson => this.setState({ content_type: responseJson['content_type'] }));
    }

    render() {
        if (this.state.content_type == "A") {
            return(<ArticlePreview id={this.state.id}/>);
        } else if (this.state.content_type == "E") {
            return(<EventPreview id={this.state.id}/>);
        }
        return <Text/>
    }
}


