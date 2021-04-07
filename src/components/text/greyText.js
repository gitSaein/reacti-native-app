import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const greyText = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 12,
    color: '#6F8BA4',
  },
});

export default greyText;
