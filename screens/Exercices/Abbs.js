import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class Abbs extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Abss exercices"
    })
    render() {
        return (
          <ScrollView>
            <View style={styles.wrapp}>
              <Image source={require('../../assets/crunches.jpg') } style={styles.container1}></Image>
                <View style={styles.overlay}>
              <Text style={styles.exercice}>Crunches</Text>
              </View>
            </View>
            <View style={styles.wrapp}>
              <Image source={require('../../assets/legRaises.jpg') } style={styles.container1}></Image>
              <View style={styles.overlay}>
                <Text style={styles.exercice}>Leg raises</Text>
              </View>
            </View>
          </ScrollView>
        );
      }
  }
  
  const styles = StyleSheet.create({
    wrapp: {
      width: '100%',
      height: 'auto',
      position: 'relative',
      borderColor: '#fff',
      borderWidth: 4
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
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    exercice: {
      color: 'orange',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });