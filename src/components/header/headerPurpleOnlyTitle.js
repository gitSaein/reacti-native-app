import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';

import ButtonWhiteLeft from '../buttons/buttonWhiteLeft';
import ButtonWhiteMoreHorizontal from '../buttons/buttonWhiteMoreHorizontal';
import WhiteTitle from '../text/whiteTitle';
import ContentWhite from '../text/contentWhite';

const {height} = Dimensions.get('window');

const headerPurpleOnlyTitle = props => {
  return (
    <View style={styles.containerStyle}>
      <WhiteTitle text={props.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default headerPurpleOnlyTitle;
