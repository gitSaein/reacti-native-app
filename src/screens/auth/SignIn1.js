import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header1 from '../../components/common/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';
import ButtonNoLine from '../../components/buttons/buttonNoLine';
import ButtonNaver from '../../components/buttons/buttonNaver';
import ButtonKakao from '../../components/buttons/buttonKakao';

import {Divider} from 'react-native-elements';

const SignIn1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header1 title={'로그인'} />
      <View style={styles.form}>
        <Input1 placeholder={'email'} autoCompleteType={'email'} />
        <InputPassword placeholder={'password'} />
      </View>
      <View style={styles.forgot_password}>
        <ButtonNoLine
          text={'비밀번호를 잊으셨나요?'}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <Button1 text={'시작하기'} />
      </View>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.button2}>
        <Button1
          text={'회원가입'}
          onPress={() => navigation.navigate('SignUp')}
        />
        <ButtonKakao text={'카카오로 시작하기'} />
        <ButtonNaver text={'네이버로 시작하기'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  form: {
    top: '20%',
  },
  forgot_password: {
    top: '20%',
    alignSelf: 'flex-end',
    marginRight: 40,
  },
  divider: {
    top: '25%',
  },
  button2: {
    top: '30%',
    alignItems: 'center',
  },
});
export default SignIn1;
