import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import ButtonAction from '../../../components/buttons/buttonAction';
import HeaderSearchInput from '../../../components/input/headerSearchInput';
import HeaderWithComponent from '../../../components/common/headerWithComponent';

const chatDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderWithComponent
        leftComponent={<HeaderSearchInput placeholder={'Search'} />}
      />
      <View style={{marginTop: 90, alignSelf: 'flex-start'}} />
      <ButtonAction
        items={[
          {
            title: 'secret chat',
            color: '#99FFCC',
            icon: 'lock-closed-outline',
          },
          {title: 'open chat', color: '#FFFF66', icon: 'lock-open-outline'},
        ]}
        onPress={item => console.log(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default chatDetail;
