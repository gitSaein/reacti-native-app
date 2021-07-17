import React from 'react';
import GreyCropProfileTitle from '../text/greyCropProfileTitle';

import {Avatar} from 'react-native-elements';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

const cropUserProfile = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} rounded source={item.image} />
      <View style={styles.user}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Avatar size="small" rounded={true} source={item.profileImage} />
        </View>
        <View style={{flex: 3.5, justifyContent: 'center'}}>
          <GreyCropProfileTitle text={item.title} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 18,
  },
  user: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
  },
});
export default cropUserProfile;
