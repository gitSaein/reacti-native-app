import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ButtonClip from '../buttons/buttonClip';
import ButtonCamera from '../buttons/buttonCamera';
import ButtonLocation from '../buttons/buttonLocation';
import ButtonAddPerson from '../buttons/buttonAddPerson';

const {width, height} = Dimensions.get('window');

const bottomSlideUpDownAddmodal = ({isVisible, onClose, setPhotos}) => {
  return (
    <Modal
      backdropOpacity={0}
      isVisible={isVisible}
      useNativeDriver={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={onClose}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: 40,
          alignContent: 'space-around',
        }}>
        <View style={{flex: 1}}>
          <ButtonClip />
        </View>
        <View style={{flex: 1}}>
          <ButtonCamera setPhotos={setPhotos} />
        </View>
        <View style={{flex: 1}}>
          <ButtonLocation />
        </View>
        <View style={{flex: 1}}>
          <ButtonAddPerson />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: height / 10,
    width: width - 20,

    bottom: 0,
    position: 'absolute',
  },
});

export default bottomSlideUpDownAddmodal;
