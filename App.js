import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SettingsScreen from './screens/Settings';


const tabNavigator = createBottomTabNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Settings: SettingsScreen
}) 


export default createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
