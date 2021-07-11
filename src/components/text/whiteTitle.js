import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const whiteText = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlignVertical: 'top',
    letterSpacing: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default whiteText;
