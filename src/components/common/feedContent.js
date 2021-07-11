import React from 'react';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';
import Content from '../text/content';

import {Avatar} from 'react-native-elements';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ButtonLike from '../buttons/buttonLike';
import ButtonComment from '../buttons/buttonComment';
import ButtonShareArrow from '../buttons/buttonShareArrow';
import IconContent from '../text/iconContent';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
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
      <View style={styles.icon} />
      {/* **************** */}
      {/* text */}
      <View style={{height: 48}}>
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
      {/* **************** */}
      {/* command */}
      <View style={styles.command}>
        <View style={{flexDirection: 'row'}}>
          <ButtonLike />
          <IconContent text={'2'} />
          <ButtonComment />
          <IconContent text={'2'} />
        </View>
        <ButtonShareArrow />
      </View>
      {/* **************** */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 350,
    backgroundColor: '#ffffff',
    margin: 5,
    padding: 5,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  command: {flexDirection: 'row', justifyContent: 'space-between', margin: 20},
});
export default feedContent;
