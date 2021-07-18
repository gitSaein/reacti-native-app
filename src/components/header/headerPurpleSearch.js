import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import HeaderSearchInput from '../input/headerSearchInput';
const {height} = Dimensions.get('window');

const headerPurpleSearch = props => {
  return (
    <View style={styles.containerStyle}>
      <HeaderSearchInput />
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
export default headerPurpleSearch;
