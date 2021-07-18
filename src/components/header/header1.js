import React from 'react';
import {StyleSheet} from 'react-native';

import {Header} from 'react-native-elements';

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
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '90.47%',

    backgroundColor: '#504DE5',
    borderRadius: 16,
  },
});
export default header1;
