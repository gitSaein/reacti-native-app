import React from 'react';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';

import {Avatar} from 'react-native-elements';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const cropUserProfile = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} rounded source={item.image} />
      <View style={styles.user}>
        <Avatar size="small" rounded={true} source={item.profileImage} />
        <GreyCropProfileTitle text={item.title} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 189,
    width: 220,
    margin: 2,
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 18,
  },
  user: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});
export default cropUserProfile;
