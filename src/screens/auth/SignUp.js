import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Header1 from '../../components/common/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';

const SignUp = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const handleChangeName = e => {
    const {text} = e.nativeEvent;
    setUserInfo(prevState => ({
      ...prevState,
      name: text,
    }));
  };
  const handleChangeEmail = e => {
    const {text} = e.nativeEvent;
    setUserInfo(prevState => ({
      ...prevState,
      email: text,
    }));
  };
  const handleChangePassword = e => {
    const {text} = e.nativeEvent;
    setUserInfo(prevState => ({
      ...prevState,
      password: text,
    }));
  };
  return (
    <View style={styles.container}>
      <Header1 title={'회원가입'} />
      <View style={styles.form}>
        <Input1
          id="name"
          placeholder={'이름'}
          keyboardType={'default'}
          onChange={handleChangeName}
          value={userInfo.name}
        />
        <Input1
          id="email"
          placeholder={'email'}
          keyboardType={'email-address'}
          onChange={handleChangeEmail}
          value={userInfo.email}
        />
        <InputPassword
          id="password"
          placeholder={'password'}
          onChange={handleChangePassword}
          value={userInfo.password}
        />
        <InputPassword placeholder={'confirm password'} onChange={null} />
        <Button1
          text={'다음'}
          onPress={() => navigation.navigate('SmsPhoneNumber')}
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
