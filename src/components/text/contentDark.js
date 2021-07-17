import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const contentDark = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    letterSpacing: 1,
    fontWeight: '400',
    fontSize: 14,
    color: '#323643',
  },
});

export default contentDark;
