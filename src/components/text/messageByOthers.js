import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import Content from './content';
import ContentDark from './contentDark';

const messageByOthers = ({item, index}) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        margin: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Avatar size="medium" rounded={true} source={item.imageUrl} />
        </View>
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            marginLeft: 15,
            padding: 15,
            backgroundColor: '#EEEEF9',
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}>
          <ContentDark text={item.message} />
        </View>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Content text={item.updateDate} />
        </View>
      </View>
    </View>
  );
};
export default messageByOthers;
