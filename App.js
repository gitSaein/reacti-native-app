/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome1 from './src/views/welcome/Welcome1.js';
import SignIn1 from './src/views/auth/SignIn1.js';
import SignUp from './src/views/auth/SignUp.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome1">
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="SignIn1" component={SignIn1} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
