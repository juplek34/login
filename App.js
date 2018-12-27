import React from 'react';
import { Button } from 'react-native';
import { Text, Item, Icon, Input } from 'native-base';
import Login from './component/Login';
import Register from './component/Register';
import Home from './screens/Home';
import Terbaru from './screens/Terbaru';
import Populer from './screens/Populer';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation'; // Version can be specified in package.json

const RootStack = createStackNavigator(
  {
    Populer: {
      screen: Populer,
      navigationOptions: {
        header:null,
      },
    },

    Terbaru: {
      screen: Terbaru,
      navigationOptions: {
        header:null,
      },
    },

    Home: {
      screen: Home,
      navigationOptions: {
        header:null,
      },
    },

    Register: {
      screen: Register,
      navigationOptions: {
        header:null,
      }
    },
    
    Login: {
      screen: Login,
      navigationOptions: {
        header:null,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
  
  );

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}