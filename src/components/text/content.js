import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const content = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    letterSpacing: 1,
    fontSize: 14,
    color: '#6F8BA4',
    margin: 10,
  },
});

export default content;
