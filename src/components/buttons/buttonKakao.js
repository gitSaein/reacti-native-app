import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonKakao = ({text, onDone}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onDone}>
      <Image
        style={styles.image}
        source={require('../../assets/images/login/kakao_login_small.png')}
      />
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#504DE5',
    borderWidth: 1,
    height: 50,
    width: 347,
    borderRadius: 25,
    marginTop: 10,
  },
  button_text: {
    position: 'absolute',
    padding: 17,
    alignSelf: 'center',

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 1,

    color: '#504DE5',
  },
  image: {
    height: 25,
    width: 25,
    left: 54,
    marginTop: 11,
  },
});
export default buttonKakao;
