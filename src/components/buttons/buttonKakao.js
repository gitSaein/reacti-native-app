import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonKakao = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        // style={styles.image}
        source={require('../../assets/images/login/kakao_login_medium_wide.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 347,
    alignItems: 'center',
  },
});
export default buttonKakao;
