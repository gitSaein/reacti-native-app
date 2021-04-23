import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const greyCropProfileTitle = props => {
  return (
    <Text {...props} style={styles.text}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlignVertical: 'top',
    letterSpacing: 1,
    fontSize: 14,
    color: '#3B566E',
    margin: 10,
  },
});

export default greyCropProfileTitle;
