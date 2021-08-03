import React from 'react';
import {View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import Content from '../text/content';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';
import ButtonLike from '../buttons/buttonLike';
import IconContent from '../text/iconContent';
const {width} = Dimensions.get('window');

const commendInfo = ({item, index}) => {
  return (
    <View index={index} style={{width: width, height: 66, margin: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Avatar
            size="medium"
            rounded={true}
            source={item.imageUrl}
            containerStyle={{
              padding: 1,
              margin: 1,
              borderColor: '#504DE5',
              borderWidth: 2,
            }}
          />
        </View>
        <View style={{flex: 5, marginLeft: 15}}>
          <View style={{flexDirection: 'row'}}>
            <GreyCropProfileTitle text={item.userId} />
            <View style={{marginLeft: 10}}>
              <Content text={item.createDate} />
            </View>
          </View>
          <Content text={item.commend} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginRight: 40}}>
          <ButtonLike />
          <IconContent text={item.likeCnt} />
        </View>
      </View>
    </View>
  );
};
export default commendInfo;
