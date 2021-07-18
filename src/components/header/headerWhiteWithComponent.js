import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonClose from '../buttons/buttonClose';
import GreyTitle from '../text/greyTitle';
import ButtonNext from '../buttons/buttonNext';

const headerWhiteWithComponent = ({onClose, title, onNext}) => {
  return (
    <View style={styles.container}>
      <ButtonClose onClose={onClose} />
      <GreyTitle text={title} />
      <ButtonNext onNext={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});
export default headerWhiteWithComponent;
