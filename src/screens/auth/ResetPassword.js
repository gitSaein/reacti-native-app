import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Header1 from '../../components/header/header1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header1 title={'비밀번호 재설정'} />
      <InputPassword placeholder={'password'} />
      <InputPassword placeholder={'password'} />
      <Button1
        text={'비밀번호 재설정하기'}
        onPress={() => navigation.navigate('SignIn1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //세로
    alignItems: 'center', //가로
  },
  button: {
    top: '25%',
  },
});
export default SignUp;
