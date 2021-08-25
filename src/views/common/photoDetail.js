import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';

import Header from '../../components/header/headerPurpleLeftSetting.js';
import FeedBottomLayout from '../../components/layout/feedBottomLayout';
import CommendInfo from '../../components/common/commendInfo';
import InputMessageSender from '../../components/input/inputMessageSender';

const photoDetail = ({route}) => {
  console.log(route);
  const navigation = useNavigation();
  const images = {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree', // Network image
    ],
  };

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
      <Header title={'Photo Detail'} onLeft={() => navigation.goBack()} />
      <View style={{flex: 6, marginTop: 10}}>
        <SliderBox
          ImageComponentStyle={{borderRadius: 16, width: '90%'}}
          sliderBoxHeight={300}
          images={images.images}
        />
      </View>
      <View style={{flex: 0.1, margin: 20}}>
        <FeedBottomLayout likeCnt={10} cmtCnt={4} />
      </View>
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

export default photoDetail;
