import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header1 from '../../components/common/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';
import ButtonNoLine from '../../components/buttons/buttonNoLine';
import ButtonNaver from '../../components/buttons/buttonNaver';
import ButtonKakao from '../../components/buttons/buttonKakao';
import GreyText from '../../components/text/greyText';

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
          text={'비밀번호를 잊으셨나요?       '}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
      <Button1 text={'시작하기'} />
      <View style={styles.or}>
        <GreyText text={'OR'} />
      </View>
      <Button1
        text={'회원가입'}
        onPress={() => navigation.navigate('SignUp')}
      />
      <ButtonKakao text={'카카오로 시작하기'} />
      <ButtonNaver text={'네이버로 시작하기'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //세로
    alignItems: 'center', //가로
  },
  or: {
    paddingTop: 30,
    paddingBottom: 20,
  },
  forgot_password: {
    alignSelf: 'flex-end',
  },
});
export default SignIn1;
