import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';

import Header from '../../components/header/headerPurpleLeftSetting.js';
import FeedBottomLayout from '../../components/layout/feedBottomLayout';
const photoDetail = ({route}) => {
  const navigation = useNavigation();
  const images = {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree', // Network image
    ],
  };

  console.log(route.params);
  return (
    <View style={styles.container}>
      <Header title={'Photo Detail'} onLeft={() => navigation.goBack()} />
      <SliderBox
        ImageComponentStyle={{borderRadius: 16, width: '90%', marginTop: 30}}
        sliderBoxHeight={300}
        images={images.images}
      />
      <FeedBottomLayout likeCnt={10} cmtCnt={4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});

export default photoDetail;
