import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header1 from '../../components/common/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Text1 from '../../components/text/text1.js';
import Button1 from '../../components/buttons/button1';
import Button2 from '../../components/buttons/button2';

import {Divider} from 'react-native-elements';

const signIn1 = () => {
  return (
    <View style={styles.container}>
      <Header1 title={'로그인'} />
      <View style={styles.input1}>
        <Input1 placeholder={'email'} keyboardType={'email-address'} />
      </View>
      <View style={styles.input2}>
        <InputPassword placeholder={'password'} />
      </View>
      <View style={styles.text1}>
        <Text1 text={'비밀번호 찾기'} />
      </View>
      <View style={styles.button1}>
        <Button1 text={'시작하기'} />
      </View>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.button2}>
        <Button1 text={'회원가입'} />
      </View>
      <View style={styles.button2}>
        <Button2 text={'카카오로 시작하기'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input1: {
    top: '25%',
    left: '6%',
  },
  input2: {
    top: '26%',
    left: '6%',
  },
  text1: {
    top: '28%',
    left: '75%',
  },
  button1: {
    top: '30%',
    left: '6%',
  },
  divider: {
    top: '35%',
  },
  button2: {
    top: '40%',
    left: '6%',
  },
});
export default signIn1;
