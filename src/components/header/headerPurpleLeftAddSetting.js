import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import WhiteTitle from '../text/whiteTitle';
import ButtonSetting from '../buttons/buttonSetting';
import ButtonAdd from '../buttons/buttonAdd';
import ButtonWhiteLeft from '../buttons/buttonWhiteLeft';

const {height} = Dimensions.get('window');

const headerPurpleLeftAddSetting = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ButtonWhiteLeft onPress={props.onPress} />
      </View>
      <View style={{flex: 7, justifyContent: 'center'}}>
        <WhiteTitle text={props.title} />
      </View>
      <View
        style={{flex: 1, alignContent: 'flex-end', justifyContent: 'center'}}>
        <ButtonAdd />
      </View>
      <View
        style={{flex: 1, alignContent: 'flex-end', justifyContent: 'center'}}>
        <ButtonSetting />
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
export default headerPurpleLeftAddSetting;
