import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

// create component
export default class HomeScreen extends React.Component {

  //here we can set the title, add buttons to the nav bar, add styles, etc for the component
  static navigationOptions = ({ navigation }) => ({
    title: "Workout Exercices",
})
    render() {
      return (
        // we use toucableOpacity to be able to add onPress function since it's not possible with View
        <ScrollView>
          <TouchableOpacity style={styles.wrapp} onPress={() => { 
            this.props.navigation.navigate('Abbs') //to navigate to pages
          }}>
            <Image source={require('../../assets/abss.jpg') } style={styles.container1}></Image>
            <View style={styles.overlay}>
            <Text style={styles.exercice}>Abbs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapp} onPress={() => {
            this.props.navigation.navigate('Back')
          }}>
            <Image source={require('../../assets/back.jpg') } style={styles.container1}></Image>
            <View style={styles.overlay}>
            <Text style={styles.exercice}>Back</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  wrapp: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'relative',
    borderColor: '#fff',
    borderWidth: 4
  },
  container1: {
    width: '50%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%',
    backgroundColor: '#000',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    borderRightColor: 'orange',
    borderRightWidth: 4
  },
  exercice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});