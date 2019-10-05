// Import the components we need from the package
import { StyleSheet, Text, View, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './screens/Exercices';
import PlanScreen from './screens/Plans';

// create a variable to store the function createBottomTabNavigator
const tabNavigator = createBottomTabNavigator({
  Exercices: HomeScreen,
  Plans: PlanScreen
},
{
  //to add styles to the tabNavigator
  tabBarOptions: {
    activeTintColor: 'orange', 
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 20,
      paddingTop: 0
    }
  }
}
);


// we use createAppContainer as our app's route component
// the createAppContainer is a function that return a component.
export default createAppContainer(tabNavigator)// using tabNavigator as a parameter, we include its components inside the app component

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
