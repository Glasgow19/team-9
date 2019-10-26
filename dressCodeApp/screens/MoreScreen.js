import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Menu from '../navigation/NavigationMenu'

export default function MoreScreen() {
  return (
    <View>
      <Menu/>
      <ScrollView style={styles.container}>
        <Text>Hey, I love screens. I want more of them.</Text>
      </ScrollView>
    </View>
  );
}

MoreScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
