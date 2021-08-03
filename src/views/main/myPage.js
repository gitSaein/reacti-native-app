import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';

import MyPageTabView from './sub/myPageTabView';
import HeaderPurpleAddSetting from '../../components/header/headerPurpleAddSetting.js';
import ProfileImage from '../../components/image/smallMediumRactangle';
const myPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderPurpleAddSetting title={'my page'} />
      <View style={styles.user}>
        <View style={styles.profile}>
          <ProfileImage
            imageUrl={require('../../assets/images/temp/tmp4.png')}
          />
        </View>
        <View style={{marginTop: 12, paddingLeft: 20}}>
          <Text style={styles.profile_title}>{'Dodge Coin'}</Text>
          <View style={{margin: 3}} />
          <Text style={styles.profile_medium_title}>{'Dodge Coin'}</Text>
          <View style={{margin: 3}} />
          <Text style={styles.email}>{'saein@naver.com'}</Text>
        </View>
      </View>
      <View style={styles.tab}>
        <MyPageTabView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  user: {flex: 0.3, margin: 20, flexDirection: 'row'},
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderColor: '#504DE5',
    borderWidth: 2,
    borderRadius: 10,
    width: 95,
    height: 95,
  },
  email: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    lineHeight: 14.32,
    fontWeight: '500',
    letterSpacing: 1,
    fontSize: 12,
    color: '#504DE5',
    textAlignVertical: 'top',
  },
  profile_medium_title: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    lineHeight: 14.32,
    fontWeight: '500',
    letterSpacing: 1,
    fontSize: 12,
    color: '#3B566E',
    textAlignVertical: 'top',
  },
  profile_title: {
    paddingTop: 10,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    lineHeight: 23.87,
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 20,
    color: '#333333',
  },
  tab: {
    flex: 0.7,
  },
});

export default myPage;
