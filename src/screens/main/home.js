import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderWithComponent from '../../components/common/headerWithComponent';
import HeaderSearchInput from '../../components/input/headerSearchInput';
import ButtonAdd from '../../components/buttons/buttonAdd';

const home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderWithComponent
        leftComponent={<HeaderSearchInput placeholder={'Search'} />}
        rightComponent={<ButtonAdd />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default home;
