import React from 'react';
import {View} from 'react-native';
import Content from './content';
import ContentWhite from './contentWhite';

const messageByMe = ({item, index}) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        margin: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Content text={item.updateDate} />
        </View>
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            marginRight: 15,
            padding: 15,
            backgroundColor: '#504DE5',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 24,
          }}>
          <ContentWhite text={item.message} />
        </View>
      </View>
    </View>
  );
};
export default messageByMe;
