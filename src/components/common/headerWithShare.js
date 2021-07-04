import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonShare from '../buttons/buttonShare';
import ButtonLeft from '../buttons/buttonLeft';

const headerWithShare = ({onClose, onNext}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ButtonLeft onPress={onClose} />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <ButtonShare />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 20,
  },
});
export default headerWithShare;
