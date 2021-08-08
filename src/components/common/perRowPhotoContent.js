import React from 'react';
import {View, StyleSheet} from 'react-native';
import MediumRactangleImageFrame from '../image/mediumSquare';

const perRowPhotoContent = ({i, items, onPress}) => {
  console.log(i);
  return (
    <View key={'per_content_' + i} style={styles.rowView}>
      {items[i * 3] ? (
        <MediumRactangleImageFrame
          onPress={() => onPress(items[i * 3])}
          imageUrl={items[i * 3].img_url}
        />
      ) : (
        <View />
      )}
      {items[i * 3 + 1] ? (
        <MediumRactangleImageFrame
          onPress={() => onPress(items[i * 3 + 1])}
          imageUrl={items[i * 3 + 1].img_url}
        />
      ) : (
        <View />
      )}
      {items[i * 3 + 2] ? (
        <MediumRactangleImageFrame
          onPress={() => onPress(items[i * 3 + 2])}
          imageUrl={items[i * 3 + 2].img_url}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 14,
    margin: 5,
    width: 120,
    height: 120,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});

export default perRowPhotoContent;
