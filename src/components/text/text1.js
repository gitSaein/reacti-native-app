import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const text1 = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontSize: 12,
    color: '#504DE5',
    lineHeight: 14.32,
  },
});

export default text1;
