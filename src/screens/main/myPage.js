import React, {useState, useCallback} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import HeaderPurpleOnlyTitle from '../../components/header/headerPurpleOnlyTitle.js';

const myPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderPurpleOnlyTitle title={'비밀번호 재설정'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});

export default myPage;
