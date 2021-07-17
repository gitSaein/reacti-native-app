import React from 'react';
import {View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import Content from '../text/content';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';
const {width} = Dimensions.get('window');

const messageInfo = ({item, index}) => {
  return (
    <View index={index} style={{width: width, height: 66, margin: 10}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Avatar size="medium" rounded={true} source={item.imageUrl} />
        </View>
        <View style={{flex: 4, marginLeft: 15}}>
          <GreyCropProfileTitle text={item.title} />
          <Content text={item.message} />
        </View>
        <View style={{flex: 1.5, alignItems: 'flex-end', marginRight: 15}}>
          <Content text={item.updateDate} />
        </View>
      </View>
    </View>
  );
};
export default messageInfo;
