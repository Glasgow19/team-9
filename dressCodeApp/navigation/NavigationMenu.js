import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Header } from "react-native-elements";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavigationMenu() {
  return (
    <View>
	    <Header 
			containerStyle={{
			    backgroundColor: '#A7358C',
			    justifyContent: 'space-around',
			}}
			leftComponent={<Image
	            source={
	            	require('../assets/images/logos/dressCODE_Final_inverted.png')
	            }
	            style={{ width: 200,
				    height: 160,
				    resizeMode: 'contain',
				    marginLeft: 100, }}
	          />}
	    	rightComponent={<Image
	            source={
	            	require('../assets/images/logos/jp-morgan.png')
	            }
	            style={{ width: 80,
				    height: 100,
				    paddingBottom: 0,
				    resizeMode: 'contain',
				    alignSelf: 'flex-end'
					}}
	          />}>
        </Header>
    </View>
  );
}

const styles = StyleSheet.create({
	getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
})
