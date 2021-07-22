import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createAppContainer} from 'react-navigation';

import GroupView from '../views/main/group';
import HomeView from '../views/main/home';

const tab = createMaterialTopTabNavigator(
  {
    Group: GroupView,
    Home: HomeView,
  },
  {
    tabBarOptions: {
      labelStyle: {fontSize: 12},
      tabStyle: {width: 100},
      style: {
        backgroundColor: 'powderblue',
      },
    },
  },
);

export default createAppContainer(tab);
