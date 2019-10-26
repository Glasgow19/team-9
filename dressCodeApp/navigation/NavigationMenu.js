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
	    		leftComponent={{ icon: 'menu', color: '#fff' }}
				centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
				rightComponent={{ icon: 'home', color: '#fff' }}>		
			<Image
	            source={
	            	require('../assets/images/logos/dressCODE_Final.png')
	            }
	            style={{ width: 100,
				    height: 80,
				    resizeMode: 'contain',
				    marginTop: 3,
				    marginLeft: -10, }}
	          />
        </Header>
    </View>
  );
}
