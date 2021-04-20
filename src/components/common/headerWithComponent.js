import React from 'react';
import {StyleSheet} from 'react-native';

import {Header} from 'react-native-elements';

const headerWithComponent = props => {
  return <Header {...props} containerStyle={styles.containerStyle} />;
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '90.47%',
    height: 80,

    backgroundColor: '#504DE5',
    borderRadius: 16,
  },
});
export default headerWithComponent;
