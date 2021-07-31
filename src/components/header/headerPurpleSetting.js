import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import WhiteTitle from '../text/whiteTitle';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';

const {height} = Dimensions.get('window');

const headerPurpleAddSetting = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 9}}>
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
export default headerPurpleAddSetting;
