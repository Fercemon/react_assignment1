import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>login</Text>
      </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: -100,
    alignItems: 'center'
  },
  container2: {
    marginTop: 50
  },
  h1: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'gray',
    marginBottom: 20,
    padding: 10,
    width: '100%'
  }
});