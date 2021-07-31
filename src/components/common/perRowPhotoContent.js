import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const perRowPhotoContent = ({i, items}) => {
  return (
    <View key={i} style={styles.rowView}>
      {items[i * 3] ? (
        <TouchableOpacity>
          <Image style={styles.image} source={items[i * 3].img_url} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {items[i * 3 + 1] ? (
        <TouchableOpacity>
          <Image style={styles.image} source={items[i * 3 + 1].img_url} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {items[i * 3 + 2] ? (
        <TouchableOpacity>
          <Image style={styles.image} source={items[i * 3 + 2].img_url} />
        </TouchableOpacity>
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
