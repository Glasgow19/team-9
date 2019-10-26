import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Menu from '../navigation/NavigationMenu';
import { View } from 'react-native'

export default function SavedScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
   return(
   	<View>
   		<Menu/>
   	</View>
   )
}

SavedScreen.navigationOptions = {
  header: null,
};
