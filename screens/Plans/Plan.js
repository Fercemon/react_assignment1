import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class PlanScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ // to set the title of the header
    title: "Workout Plans",
})
    render() {
      return (
        // we use toucableOpacity to be able to add onPress function since it's not possible with View
        <ScrollView contentContainerStyle={styles.pageWrapp}>
        <TouchableOpacity style={styles.wrapp} onPress={() => { 
          this.props.navigation.navigate('MonthsBodyBuilder3') //to navigate to pages
        }}>
          <Image source={require('../../assets/3months.jpg') } style={styles.container1}></Image>
          <Text style={styles.price}>Free</Text>
            <View style={styles.overlay}>
          <Text style={styles.exercice}>3 months BODYBUILDER</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.wrapp} onPress={() => { 
          this.props.navigation.navigate('Abbs') //to navigate to pages
        }}>
          <Image source={require('../../assets/5months.jpg') } style={styles.container1}></Image>
          <Text style={styles.price}>Lock</Text>
          <View style={styles.overlay}>
            <Text style={styles.exercice}>5 months BODYBUILDER</Text>
          </View>
        </View>
      </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  pageWrapp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  wrapp: {
    width: '48%',
    position: 'relative',
   
  },
  container1: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    width: '100%',
    backgroundColor: '#000',
  },
  exercice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    position: 'absolute',
    top: 4,
    left: 4,
    color: '#fff'
  }
});