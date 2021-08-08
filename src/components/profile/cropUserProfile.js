import React from 'react';
import MediumRactangleImg from '../image/mediumRactangle';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ImageText = content => {
  return <Text style={styles.text}>{content}</Text>;
};

const cropUserProfile = (item, onPress) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
      <MediumRactangleImg
        imageUrl={item.image}
        component={ImageText(item.userName)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});
export default cropUserProfile;
