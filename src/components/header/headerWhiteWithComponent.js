import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonClose from '../buttons/buttonClose';
import GreyTitle from '../text/greyTitle';
import Button from '../buttons/buttonCustomizedText';

const headerWhiteWithComponent = ({onClose, title, onNext}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ButtonClose onClose={onClose} />
      </View>
      <View style={{flex: 8, alignContent: 'center', alignItems: 'center'}}>
        <GreyTitle text={title} />
      </View>
      <View style={{flex: 1}}>
        <Button onNext={onNext} text={'Next'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
});
export default headerWhiteWithComponent;
