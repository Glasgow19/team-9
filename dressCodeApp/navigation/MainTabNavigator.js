import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import MoreScreen from '../screens/MoreScreen';
import SavedScreen from '../screens/SavedScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const DiscoverStack = createStackNavigator(
  {
    Discover: DiscoverScreen,
  },
  config
);

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

DiscoverStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'Try it',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}/>
  ),
};

MoreStack.path = '';

const SavedStack = createStackNavigator(
  {
    Saved: SavedScreen,
  },
  config
);

SavedStack.navigationOptions = {
  tabBarLabel: 'Favourites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};

SavedStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DiscoverStack,
  MoreStack,
  SavedStack,
});

tabNavigator.path = '';

export default tabNavigator;
