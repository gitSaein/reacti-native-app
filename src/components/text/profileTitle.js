import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const profileTitle = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    lineHeight: 16.71,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 14,
    color: '#3B566E',
    margin: 10,
  },
});

export default profileTitle;
