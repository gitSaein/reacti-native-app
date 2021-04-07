/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome1 from './src/screens/welcome/Welcome1';
import SignIn1 from './src/screens/auth/SignIn1';
import SignUp from './src/screens/auth/SignUp';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPassword from './src/screens/auth/ResetPassword';
import SmsCode from './src/screens/auth/SmsCode';
import SmsPhoneNumber from './src/screens/auth/SmsPhoneNumber';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome1"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="SignIn1" component={SignIn1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SmsPhoneNumber" component={SmsPhoneNumber} />
        <Stack.Screen name="SmsCode" component={SmsCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '90.47%',

    backgroundColor: '#504DE5',
    borderRadius: 16,
  },
});

export default App;
