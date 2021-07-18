import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import Header1 from '../../components/header/header1.js';
import Input1 from '../../components/input/input1.js';
import Button1 from '../../components/buttons/button1';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header1 title={'비밀번호 재설정'} />
      <View style={styles.form}>
        <Input1 placeholder={'email'} autoCompleteType={'email'} />
        <Button1
          text={'재설정 메일 보내기'}
          onPress={() => navigation.navigate('ResetPassword')}
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
