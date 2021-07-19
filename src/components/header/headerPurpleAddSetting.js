import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import WhiteTitle from '../text/whiteTitle';
import ButtonSetting from '../buttons/buttonSetting';
import ButtonAdd from '../buttons/buttonAdd';

const {height} = Dimensions.get('window');

const headerPurpleAddSetting = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 4}}>
        <WhiteTitle text={props.title} />
      </View>
      <View style={{flex: 0.5, alignContent: 'flex-end'}}>
        <ButtonAdd />
      </View>
      <View style={{flex: 0.5, alignContent: 'flex-end'}}>
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
export default headerPurpleAddSetting;
