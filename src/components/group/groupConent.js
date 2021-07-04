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
import ButtonLike from '../buttons/buttonLike';
import ButtonComment from '../buttons/buttonComment';
import SmallCircleAvatar from '../profile/smallCircleAvatar';

import ButtonShareArrow from '../buttons/buttonShareArrow';
import IconContent from '../text/iconContent';
import Button2 from '../buttons/button2.js';
const {height, width} = Dimensions.get('window');

const groupContent = ({item}) => {
  if (item) {
    return (
      <View key={item.id} style={styles.box}>
        {/**** profile ****/}
        <View style={styles.profile}>
          <View style={{flexDirection: 'row'}}>
            <Avatar size="small" rounded={true} source={item.profileImage} />
            <GreyCropProfileTitle text={item.title} />
          </View>
          <Button2 title={'JOIN'} />
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
          <View style={{flexDirection: 'row', margin: 5}}>
            <SmallCircleAvatar />
            <View style={{marginLeft: 25}}>
              <IconContent text={'+ 10 join this'} />
            </View>
          </View>
          <ButtonShareArrow />
        </View>
        {/* **************** */}
      </View>
    );
  } else {
    return <View />;
  }
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
  box: {
    backgroundColor: '#FFFFFF',
    margin: 2,
    width: width - 8,
    height: height * 0.5,
    borderRadius: 14,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#29000000',
    padding: 10,
  },
  profile: {flexDirection: 'row', justifyContent: 'space-between', padding: 10},
  command: {flexDirection: 'row', justifyContent: 'space-between', padding: 10},
});
export default groupContent;
