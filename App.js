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

import Welcome from './src/views/welcome/Welcome';
import SignIn1 from './src/views/auth/SignIn1';
import smsCodeView from './src/views/auth/SmsCodeView';
import SmsPhoneNumber from './src/views/auth/SmsPhoneNumber';
import ChatDetail from './src/views/main/chatDetail';
import PhotoDetail from './src/views/common/photoDetail';
import EditProfile from './src/views/common/editProfileView';

import Home from './src/views/main/home';
import Chat from './src/views/main/chat';
import Community from './src/views/main/community';
import MyPage from './src/views/main/myPage';
import Group from './src/views/main/group';

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
    params: {isMe: true},
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
          initialParams={route.params}
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
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'SignIn1',
    component: SignIn1,
  },
  {
    name: 'SmsCode',
    component: smsCodeView,
  },
  {
    name: 'SmsPhoneNumber',
    component: SmsPhoneNumber,
  },
  {
    name: 'Home',
    component: HomeStackScreen,
  },
  {
    name: 'ChatDetail',
    component: ChatDetail,
  },
  {
    name: 'PhotoDetail',
    component: PhotoDetail,
  },
  {
    name: 'FriendPage',
    component: MyPage,
    params: {isMe: false},
  },
  {
    name: 'EditProfile',
    component: EditProfile,
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
        initialRouteName="Welcome"
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
