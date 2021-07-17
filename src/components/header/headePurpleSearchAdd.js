import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import HeaderSearchInput from '../input/headerSearchInput';
import ButtonAdd from '../buttons/buttonAdd';
const {height, width} = Dimensions.get('window');

const headePurpleSearchAdd = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 7}}>
        <HeaderSearchInput />
      </View>
      <View style={{flex: 1}}>
        <ButtonAdd />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default headePurpleSearchAdd;
