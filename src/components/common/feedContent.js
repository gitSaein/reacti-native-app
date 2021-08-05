import React from 'react';
import {Avatar} from 'react-native-elements';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

import GreyCropProfileTitle from '../text/greyCropProfileTitle';
import Content from '../text/content';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
import FeedBottomLayout from '../layout/feedBottomLayout';
const feedContent = ({item}) => {
  const {width} = Dimensions.get('window');

  return (
    <View key={item.id} style={styles.container}>
      {/**** profile ****/}
      <View style={styles.profile}>
        <View style={{flexDirection: 'row'}}>
          <Avatar size="medium" rounded={true} source={item.profileImage} />
          <GreyCropProfileTitle text={item.title} />
        </View>
        <ButtonWhiteMoreHorizontal onPress={() => console.log('hihi')} />
      </View>
      {/* **************** */}
      {/* text */}
      <View style={{height: 30}}>
        <Content text={item.contents} />
      </View>
      {/* **************** */}
      {/* photo */}
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 170, borderRadius: 16, width: width * 0.9}}
          source={require('../../assets/images/temp/feed.png')}
        />
      </View>
      <FeedBottomLayout likeCnt={4} cmtCnt={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 300,
    backgroundColor: '#ffffff',
    marginTop: 5,
    padding: 5,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});
export default feedContent;
