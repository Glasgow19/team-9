import React from 'react';
import Menu from '../navigation/NavigationMenu';
import { View, FlatList, StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { ListItem, Image, Button, Card, Icon, Text } from 'react-native-elements'

export default function DiscoverScreen() {
  return (  
    <View>
      <Menu/>
        <ScrollView style={styles.scrollView}>
            {
              tabs.map((l,i) => 
                <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                <Card
                  title={<Text h4 style={{fontSize: 42, textAlign: 'center'}}>{l.title}</Text>}
                   image={<Image
                    source={{ uri: l.picture }}
                    style={{ width: Dimensions.get('window').width , height: 200}}/>}>
                  <Text style={{marginBottom: 10}}>
                    {l.subtitle}
                  </Text>
                </Card>  
                </TouchableWithoutFeedback>
              )
            }
        </ScrollView>    
    </View>
  );
}

DiscoverScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 110
  },
  text: {
    fontSize: 42,
    textAlign: 'center'
  },
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

