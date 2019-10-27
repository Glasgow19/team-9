import React, { Component } from 'react';
import Menu from '../navigation/NavigationMenu';
import { View, FlatList, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Image, Button, Card, Icon, Text } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

class DiscoverScreen extends React.Component {
  render(){
    return (  
      <View style={styles.container}>
      <Menu/>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        {
          tabs.map((l,i) => 
            <Card
              flexDirection='column'
              title={<Text h4 style={{
                color: "#fff", 
                fontSize: "1.5em",
                fontWeight: "bold",
                lineHeight: 40,
                textAlign: 'center', 
                backgroundColor:"#f9b222"}}>{l.title}</Text>}
              image={<Image
                      source={{ uri: l.picture }}
                      style={{ width: Dimensions.get('window').width , height: 200}}/>}
              imageStyle={{overflow: 'hidden', backgroundColor:"#f9f9f9"}}
              imageWrapperStyle={{overflow: 'hidden'}}
              containerStyle={styles.cardLoopContainer}>
              <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 10}}>
                {l.subtitle}
              </Text>
            </Card>  
          )
        }
      </ScrollView>
    </View>
    );
  }
}

DiscoverScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  innercontainer: {
    flex:1,
    backgroundColor: '#fff',
    marginBottom: "20%",
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center'
  }
});

const tabs = [
  {
    title: 'Articles',
    picture: '../assets/images/robot-dev.png',
    subtitle: 'Lorem ipsum'
  },
  {
    key: '2',
    title: 'Media',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Lorem ipsum'
  },
  {
    key: '3',
    title: 'Quizzes',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Lorem ipsum'
  },
  {
    key: '4',
    title: 'Events',
    picture: '../assets/images/robot-dev.png',
    subtitle: 'Lorem ipsum'
  },
]

export default DiscoverScreen;
