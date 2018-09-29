import React from 'react';
import { StackNavigator } from 'react-navigation';

import Settings from './app/Settings';
import Home from './app/Home';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
     );
   }
}

