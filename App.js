/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {Image, StyleSheet, Platform, PermissionsAndroid} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Geolocation from 'react-native-geolocation-service';

import Welcome1 from './src/screens/welcome/Welcome1';
import SignIn1 from './src/screens/auth/SignIn1';
import SignUp from './src/screens/auth/SignUp';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPassword from './src/screens/auth/ResetPassword';
import SmsCode from './src/screens/auth/SmsCode';
import SmsPhoneNumber from './src/screens/auth/SmsPhoneNumber';

import Home from './src/screens/main/home';
import Chat from './src/screens/main/chat';
import Community from './src/screens/main/community';
import MyPage from './src/screens/main/myPage';
import Group from './src/screens/main/group';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabButtonRoutes = [
  {
    name: 'Home',
    component: Home,
    active: require('./src/assets/images/icon/Home.png'),
    inactive: require('./src/assets/images/icon/HomeInactive.png'),
  },
  {
    name: 'Community',
    component: Community,
    active: require('./src/assets/images/icon/Notifications.png'),
    inactive: require('./src/assets/images/icon/NotificationsInactive.png'),
  },
  {
    name: 'Group',
    component: Group,
    active: require('./src/assets/images/icon/Stream.png'),
    inactive: require('./src/assets/images/icon/StreamInactive.png'),
  },
  {
    name: 'Chat',
    component: Chat,
    active: require('./src/assets/images/icon/Chat.png'),
    inactive: require('./src/assets/images/icon/ChatInactive.png'),
  },
  {
    name: 'MyPage',
    component: MyPage,
    active: require('./src/assets/images/icon/Profile.png'),
    inactive: require('./src/assets/images/icon/ProfileInactive.png'),
  },
];

const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: styles.base,
        keyboardHidesTabBar: true,
      }}>
      {tabButtonRoutes.map(route => (
        <Tab.Screen
          key={`s-${route.name}`}
          name={route.name}
          component={route.component}
          options={{
            // tabBarBadge: 3,
            // tabBarVisible: false,
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => {
              return <Image source={focused ? route.active : route.inactive} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const tabNavRoutes = [
  {
    name: 'Welcome1',
    component: Welcome1,
  },
  {
    name: 'SignIn1',
    component: SignIn1,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    name: 'SmsPhoneNumber',
    component: SmsPhoneNumber,
  },
  {
    name: 'SmsCode',
    component: SmsCode,
  },
  {
    name: 'Home',
    component: HomeStackScreen,
  },
];
/* 현재 위치 함수 */
const requestPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '현재 위치 사용 동의',
          message: '현재 위치 사용에 동의하시겠습니까.',
          buttonPositive: '예',
          buttonNegative: '아니오',
        },
      );
    }
  } catch (e) {
    console.error(e);
  }
};

const App = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    if (requestPermission === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          setLocation(position.coords);
        },
        error => {
          console.error(error);
        },
        {
          enableHighAccuracy: true,
          showLocationDialog: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome1"
        screenOptions={{headerShown: false}}>
        {tabNavRoutes.map(route => (
          <Stack.Screen
            key={`n-${route.name}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 60,
    width: 355,
    borderRadius: 20,

    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowRadius: 15,
    margin: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
