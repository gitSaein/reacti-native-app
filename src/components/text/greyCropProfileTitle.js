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
    fontWeight: 'bold',
    textAlignVertical: 'top',
    letterSpacing: 1,
    fontSize: 15,
    color: '#3B566E',
  },
});

export default greyCropProfileTitle;
