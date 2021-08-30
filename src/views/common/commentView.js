import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/header/headerPurpleLeftSetting.js';
import FeedBottomLayout from '../../components/layout/feedBottomLayout';
import CommendInfo from '../../components/common/commendInfo';
import InputMessageSender from '../../components/input/inputMessageSender';

const commentView = ({route}) => {
  const navigation = useNavigation();
  const items = [
    {
      userId: 'dd1',
      commend: 'jdslfd',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      likeCnt: 12,
      createDate: '1hour',
    },
    {
      userId: 'dd2',
      commend: 'jdslfd',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      likeCnt: 2,
      createDate: '1hour',
    },
    {
      userId: 'dd3',
      commend: 'jdslfd',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      likeCnt: 1,
      createDate: '1hour',
    },
    {
      userId: 'dd4',
      commend: 'jdslfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdd',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      likeCnt: 10,
      createDate: '1hour',
    },
    {
      userId: 'dd',
      commend: 'jdslfd',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      likeCnt: 2,
      createDate: '1hour',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title={'댓글'} onLeft={() => navigation.goBack()} />
      <View
        style={{
          flex: 4.3,
          margin: 10,
        }}>
        <ScrollView>
          {items.length > 0 &&
            items.map((item, index) => {
              return <CommendInfo index={index} item={item} />;
            })}
        </ScrollView>
      </View>
      <InputMessageSender />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
});

export default commentView;
