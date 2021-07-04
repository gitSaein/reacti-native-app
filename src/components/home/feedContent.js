import React from 'react';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';
import Contents from '../text/content';

import {Avatar} from 'react-native-elements';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ButtonLike from '../../components/buttons/buttonLike';
import ButtonComment from '../../components/buttons/buttonComment';
import ButtonShareArrow from '../../components/buttons/buttonShareArrow';
import IconContent from '../../components/text/iconContent';

const feedContent = ({item}) => {
  const {width} = Dimensions.get('window');

  return (
    <View key={item.id} style={styles.container}>
      {/**** profile ****/}
      <View style={styles.profile}>
        <View style={{flexDirection: 'row'}}>
          <Avatar size="small" rounded={true} source={item.profileImage} />
          <GreyCropProfileTitle text={item.title} />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/icon/more-horizontal-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.icon} />
      {/* **************** */}
      {/* text */}
      <View style={{height: 48}}>
        <Contents text={item.contents} />
      </View>
      {/* **************** */}
      {/* photo */}
      <Image
        style={{height: 170, borderRadius: 16, width: width * 0.9}}
        source={require('../../assets/images/temp/feed.png')}
      />
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
    margin: 2,
    padding: 12,
    paddingLeft: 20,
  },
  profile: {flexDirection: 'row', justifyContent: 'space-between', padding: 10},
  command: {flexDirection: 'row', justifyContent: 'space-between', padding: 10},
});
export default feedContent;
