import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import WhiteTitle from '../text/whiteTitle';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
import ButtonWhiteLeft from '../buttons/buttonWhiteLeft';

const {height} = Dimensions.get('window');

const headerPurpleLeftSetting = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 1}}>
        <ButtonWhiteLeft onPress={props.onLeft} />
      </View>
      <View style={{flex: 8, alignContent: 'flex-end'}}>
        <WhiteTitle text={props.title} />
      </View>
      <View style={{flex: 1, alignContent: 'flex-end'}}>
        <ButtonWhiteMoreHorizontal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default headerPurpleLeftSetting;
