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
    cardLoopContainer: {
    overflow:'hidden',
    backgroundColor:'#f9f9f9',
    borderColor:'#f9f9f9',
    maxWidth:720,
    minWidth:'75%',
    borderRadius: 15,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  }
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
            title={<Text h4 style={{fontSize: 42, textAlign: 'center'}}>{this.state.title}</Text>}>
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
        this.state = { title: "", date_time: "", description: "" };
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
            title={<Text h4 style={{
                color: "#fff", 
                fontSize: "1.5em",
                fontWeight: "bold",
                lineHeight: 40,
                textAlign: 'center', 
                backgroundColor:"#f9b222"}}>{this.state.title}</Text>}
            containerStyle={styles.cardLoopContainer}>
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


