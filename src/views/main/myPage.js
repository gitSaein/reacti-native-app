import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';

import MyPageTabView from './sub/myPageTabView';
import HeaderPurpleAddSetting from '../../components/header/headerPurpleAddSetting.js';
import HeaderPurpleLeftAddSetting from '../../components/header/headerPurpleLeftAddSetting.js';
import ProfileImage from '../../components/image/smallMediumRactangle';
import Button from '../../components/buttons/buttonPurpleMedium';
import SenderButton from '../../components/buttons/buttonPurpleSender';
import {ScrollView} from 'react-native-gesture-handler';

const FriendPage = () => {
  return (
    <View style={styles.button}>
      <Button title={'Follow'} onPress={() => console.log('----')} />
      <View style={{margin: 20}} />
      <SenderButton onPress={() => console.log()} />
    </View>
  );
};

const MyPage = () => {
  return (
    <View style={styles.button}>
      <Button title={'Edited Profile'} onPress={() => console.log('----')} />
    </View>
  );
};

const myPage = ({route, navigation}) => {
  const item = route.params;
  return (
    <ScrollView
      pagingEnabled={true}
      style={styles.container}
      scrollEventThrottle={16}>
      {item !== undefined && item.isMe ? (
        <HeaderPurpleAddSetting title={'my page'} />
      ) : (
        <HeaderPurpleLeftAddSetting
          title={item.item.userName}
          onPress={() => navigation.goBack()}
        />
      )}

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
      <View style={styles.info}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.info_title}>{'FOLLOWING'}</Text>
          <Text style={styles.info_title_cnt}>{'23'}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.info_title}>{'FOLLOWER'}</Text>
          <Text style={styles.info_title_cnt}>{'23'}</Text>
        </View>
      </View>
      {item !== undefined && item.isMe ? <MyPage /> : <FriendPage />}
      <View style={styles.tab}>
        <MyPageTabView />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  user: {flex: 1.5, margin: 20, flexDirection: 'row', top: 0, bottom: 0},
  button: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F9F9F9',
    borderWidth: 1,
  },
  tab: {
    flex: 6,
  },
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
  info_title: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    letterSpacing: 1,
    fontSize: 12,
    color: '#6F8BA4',
  },
  info_title_cnt: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    textAlignVertical: 'top',
    color: '#3B566E',
  },
});

export default myPage;
