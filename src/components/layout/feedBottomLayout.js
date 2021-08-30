import React from 'react';
import {StyleSheet, View} from 'react-native';

import ButtonLike from '../buttons/buttonLike';
import ButtonComment from '../buttons/buttonComment';
import ButtonShare from '../buttons/buttonShare';
import ButtonBookmark from '../buttons/buttonBookmark';

import IconContent from '../text/iconContent';
const feedBottomLayout = ({likeCnt, cmtCnt}) => {
  return (
    <View style={styles.command}>
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonLike />
        <IconContent text={likeCnt} />
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonComment />
        <IconContent text={cmtCnt} />
      </View>
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <ButtonShare />
      </View>
      <View
        style={{
          flex: 6.5,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <ButtonBookmark />
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
