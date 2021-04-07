import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';

const smsCode = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input1 placeholder={'이름'} autoCompleteType={'email'} />
        <Input1 placeholder={'email'} autoCompleteType={'email'} />
        <InputPassword placeholder={'password'} />
        <InputPassword placeholder={'confirm password'} />
        <Button1
          text={'회원가입'}
          onPress={() => navigation.navigate('Welcome1')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //세로
    alignItems: 'center', //가로
  },
  form: {
    top: '25%',
  },
  button: {
    top: '25%',
  },
});
export default smsCode;
