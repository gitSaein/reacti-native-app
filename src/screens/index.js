import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome1 from './welcome/Welcome1.js';
import SignIn1 from './auth/SignIn1.js';

const AuthStack = createStackNavigator(
  {Welcome1, SignIn1},
  {
    initialRouteName: 'Welcome1',
  },
);

export default createAppContainer(AuthStack);
