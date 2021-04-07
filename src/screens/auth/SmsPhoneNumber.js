import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Button1 from '../../components/buttons/button1';
import GreyTitle from '../../components/text/greyTitle';
import SmallPhoneNumInput from '../../components/input/smallPhoneNumInput';

const smsPhoneNumber = ({navigation}) => {
  return (
    <View style={styles.container}>
      <GreyTitle text={'핸드폰 번호를 입력하세요'} />
      <SmallPhoneNumInput placeholder={'email'} autoCompleteType={'email'} />
      <Button1 text={'다음'} onPress={() => navigation.navigate('SmsCode')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //세로
    alignItems: 'center', //가로
  },
});
export default smsPhoneNumber;
