import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {Header} from 'react-native-elements';
const {height} = Dimensions.get('window');

const header1 = props => {
  return (
    <Header
      {...props}
      placement="center"
      centerComponent={{
        text: props.title,
        style: {color: '#fff'},
      }}
      containerStyle={styles.containerStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    justifyContent: 'center',

    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default header1;
