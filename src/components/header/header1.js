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
    justifyContent: 'center',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default header1;
