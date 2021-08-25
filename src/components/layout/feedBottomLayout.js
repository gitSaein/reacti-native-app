import React from 'react';
import {StyleSheet, View} from 'react-native';

import ButtonLike from '../buttons/buttonLike';
import ButtonComment from '../buttons/buttonComment';
import ButtonShareArrow from '../buttons/buttonShareArrow';
import IconContent from '../text/iconContent';
const feedBottomLayout = ({likeCnt, cmtCnt}) => {
  return (
    <View style={styles.command}>
      <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'center'}}>
        <ButtonLike />
        <IconContent text={likeCnt} />
      </View>
      <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'center'}}>
        <ButtonComment />
        <IconContent text={cmtCnt} />
      </View>
      <View style={{flex: 7, alignItems: 'flex-end', justifyContent: 'center'}}>
        <ButtonShareArrow />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  command: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
});
export default feedBottomLayout;
