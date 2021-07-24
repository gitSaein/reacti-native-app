import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import MyPageTabView from './sub/myPageTabView';
import HeaderPurpleAddSetting from '../../components/header/headerPurpleAddSetting.js';

const myPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderPurpleAddSetting title={'my page'} />
      <View style={styles.profile} />
      <View style={styles.tab}>
        <MyPageTabView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  profile: {flex: 0.3, backgroundColor: 'red'},
  tab: {
    flex: 0.7,
    backgroundColor: 'yellow',
  },
});

export default myPage;
