import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';

import HeaderWhiteWithComponent from '../../components/common/headerWhiteWithComponent';

const photoGallaryModal = ({
  isVisible,
  photos,
  onClose,
  setPhotos,
  onCheckedPhotos,
}) => {
  useEffect(() => {
    console.log(photos);
    photos.map(item => (item.isCheck = false));
  }, []);

  const funcCheckBox = index => {
    setPhotos(
      photos.map((item, idx) =>
        idx === index ? {...item, isCheck: !item.isCheck} : item,
      ),
    );
  };

  if (photos !== undefined && photos.length > 0) {
    return (
      <Modal isVisible={isVisible}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 15,
          }}>
          <HeaderWhiteWithComponent
            title={'Photo Gallary'}
            onClose={onClose}
            onNext={onCheckedPhotos}
          />
          {photos.map((photo, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => funcCheckBox(index)}>
                <ImageBackground
                  style={{
                    height: 200,
                    margin: 5,
                    borderRadius: 14,
                  }}
                  source={{uri: photo.node.image.uri}}>
                  <CheckBox
                    disabled={false}
                    value={photo.isCheck}
                    onValueChange={() => funcCheckBox(index)}
                  />
                </ImageBackground>
              </TouchableOpacity>
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
