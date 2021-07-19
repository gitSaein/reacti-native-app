import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import HeaderPurpleAddSetting from '../../components/header/headerPurpleAddSetting.js';

const myPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderPurpleAddSetting title={'my page'} />
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
