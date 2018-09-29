import { createStackNavigator } from 'react-navigation';

import Settings from './app/Settings';
import Home from './app/Home';

const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home }
});

export default AppNavigator;