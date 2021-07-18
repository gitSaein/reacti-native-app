import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';

import ButtonWhiteLeft from '../buttons/buttonWhiteLeft';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
import WhiteTitle from '../text/whiteTitle';
import ContentWhite from '../text/contentWhite';

const {height} = Dimensions.get('window');

const headerPurpleChatInfo = props => {
  return (
    <View style={styles.containerStyle}>
      <View
        style={{flex: 0.5, justifyContent: 'center', alignItems: 'flex-start'}}>
        <ButtonWhiteLeft onPress={props.onLeft} />
      </View>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
        <Avatar size="medium" rounded={true} source={props.item.imageUrl} />
      </View>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <WhiteTitle text={props.item.title} />
        <ContentWhite text={props.item.updateDate} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ButtonWhiteMoreHorizontal onPress={() => console.log('hi')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default headerPurpleChatInfo;
