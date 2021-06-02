import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const buttonCamera = ({setPhotos}) => {
  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 10,
    })
      .then(r => {
        console.log('start...');
        console.log(r.edges);
        setPhotos(r.edges);
      })
      .catch(e => {
        console.error('getPhotos', e);
      });
  };

  return (
    <TouchableOpacity onPress={getPhotos}>
      <Image source={require('../../assets/images/icon/camera.png')} />
    </TouchableOpacity>
  );
};

export default buttonCamera;
