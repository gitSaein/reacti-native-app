import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const iconContent = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 12,
    color: '#AEB5C0',
    marginLeft: 6,
  },
});

export default iconContent;
