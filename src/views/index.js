import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from './welcome/Welcome.js';
import SignIn1 from './auth/SignIn1.js';

const AuthStack = createStackNavigator(
  {Welcome, SignIn1},
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(AuthStack);
