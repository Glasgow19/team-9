import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Menu from '../navigation/NavigationMenu'

export default function DiscoverScreen() {
  return (  
    <View>
      <Menu/>
      <ScrollView style={styles.container}>
        <Text>Discover Europe!</Text>
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
});
