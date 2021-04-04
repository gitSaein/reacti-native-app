import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Header1 from '../../components/common/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header1 title={'회원가입'} />
      <View style={styles.form}>
        <Input1 placeholder={'이름'} autoCompleteType={'email'} />
        <Input1 placeholder={'email'} autoCompleteType={'email'} />
        <InputPassword placeholder={'password'} />
        <InputPassword placeholder={'password'} />
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
    alignItems: 'center',
  },
  form: {
    top: '25%',
  },
  button: {
    top: '25%',
  },
});
export default SignUp;
