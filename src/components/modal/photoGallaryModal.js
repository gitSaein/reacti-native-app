import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import Modal from 'react-native-modal';

import HeaderWhiteWithComponent from '../../components/common/headerWhiteWithComponent';

const photoGallaryModal = ({isVisible, photos, onClose}) => {
  console.log('------------------**---------------------');
  console.log(photos);
  if (photos !== undefined && photos.length > 0) {
    return (
      <Modal isVisible={isVisible}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <HeaderWhiteWithComponent
            title={'Photo Gallary'}
            onClose={onClose}
            onNext={onClose}
          />
          {photos.map((photo, index) => {
            return (
              <Image
                key={index}
                style={{
                  width: 200,
                  height: 200,
                  margin: 5,
                  borderRadius: 14,
                }}
                source={{uri: photo.node.image.uri}}
              />
            );
          })}
        </ScrollView>
      </Modal>
    );
  } else {
    return (
      <Modal isVisible={isVisible}>
        <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
          <HeaderWhiteWithComponent
            title={'Photo Gallary'}
            onClose={onClose}
            onNext={onClose}
          />
          <Text>DO NOT HAVE Photo</Text>
        </View>
      </Modal>
    );
  }
};

export default photoGallaryModal;
