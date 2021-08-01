import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/header/headerPurpleLeftSetting.js';

const photoDetail = ({route}) => {
  const navigation = useNavigation();

  console.log(route.params);
  return (
    <View style={styles.container}>
      <Header title={'Photo Detail'} onLeft={() => navigation.goBack()} />
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

export default photoDetail;
