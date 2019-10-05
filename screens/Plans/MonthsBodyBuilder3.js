import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Strong} from 'react-native';

export default class MonthsBodybuilder3 extends React.Component {
    static navigationOptions = ({ navigation }) => ({ // to set the title of the header
        title: "3 months BODYBUILDER"
    })
    render() {
      return (
        <View>
            <Image source={require('../../assets/3months.jpg') } style={styles.container1}></Image>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>About: </Text>
                <Text>This is a beginner 2 days a week workout plan, for beginners who are starting to workout and are stepping into the world of bodybuilding, this plan is well suited.</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Duration: </Text>
                <Text>3 months</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Goal: </Text>
                <Text>Muscle building for beginner</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Requirements: </Text>
                <Text>Beginner</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Target group: </Text>
                <Text>Men and women</Text>
            </Text>            
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container1: {
      width: '100%',
    },
    description: {
        padding: 20,
        textAlign: 'center'
    }
  });