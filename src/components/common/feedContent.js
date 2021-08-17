import React from 'react';
import {Avatar} from 'react-native-elements';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

import GreyCropProfileTitle from '../text/greyCropProfileTitle';
import Content from '../text/content';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
import FeedBottomLayout from '../layout/feedBottomLayout';
import {TouchableOpacity} from 'react-native-gesture-handler';
const feedContent = ({item, onPress}) => {
  return (
    <View key={item.id} style={styles.container}>
      <View style={{margin: 10}}>
        <TouchableOpacity onPress={() => onPress(item)}>
          {/**** profile ****/}
          <View style={styles.profile}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{justifyContent: 'center'}}>
                <Avatar
                  size="medium"
                  rounded={true}
                  source={item.profileImage}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <GreyCropProfileTitle text={item.title} />
                <Content text={item.title} />
              </View>
            </View>
            <View style={{justifyContent: 'center', marginRight: 10}}>
              <ButtonWhiteMoreHorizontal onPress={() => console.log('hihi')} />
            </View>
          </View>
          {/* **************** */}
          {/* text */}
          <View style={{height: 30, marginTop: 10}}>
            <Content text={item.contents} />
          </View>
          {/* **************** */}
          {/* photo */}
          <View style={{alignItems: 'center'}}>
            <Image
              style={{height: 170, borderRadius: 16}}
              source={require('../../assets/images/temp/feed.png')}
            />
          </View>
        </TouchableOpacity>

        <FeedBottomLayout likeCnt={4} cmtCnt={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 5,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default feedContent;
