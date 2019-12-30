import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './screen/Home';
import Friends from './screen/Friends';
const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
}
,
  {
    initialRouteName: 'Home',
  });

const App = createAppContainer(AppNavigator);

export default App;