import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonClose from '../buttons/buttonClose';
import GreyTitle from '../text/greyTitle';
import Button from '../buttons/buttonCustomizedText';

const headerWhiteWithComponent = ({onClose, title, onNext}) => {
  return (
    <View style={styles.container}>
      <ButtonClose onClose={onClose} />
      <GreyTitle text={title} />
      <Button onNext={onNext} text={'Next'} />
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
