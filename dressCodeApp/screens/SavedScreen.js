import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Menu from '../navigation/NavigationMenu';
import { View, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { ListItem, Image, Button, Card, Icon, Text } from 'react-native-elements'

export default function SavedScreen() {
   return(
   	<View>
   		<Menu/>
   		<ScrollView style={styles.scrollView}>
	      {
	        tabs.map((l,i) => 
	          <Card
	            title={<Text h4 style={{fontSize: 42, textAlign: 'center'}}>{l.title}</Text>}
	            image={<Image
						source={{ uri: l.picture }}
						style={{ width: Dimensions.get('window').width , height: 200}}/>}>
	            <Text style={{marginBottom: 10}}>
	              {l.subtitle}
	            </Text>
	          </Card>  
	        )
	      }
		</ScrollView>		
   	</View>
   )
};

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
})



SavedScreen.navigationOptions = {
  header: null
};

const tabs = [
  {
    title: 'Amy Farha',
    picture: '../assets/images/robot-dev.png',
    subtitle: 'Vice President'
  },
  {
  	key: '2',
    title: 'Chris Jackson',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
  	key: '3',
    title: 'Amy Farhas',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
  	key: '4',
    title: 'Chris Jacksons',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

