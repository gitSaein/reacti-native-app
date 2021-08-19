import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Header1 from '../../components/header/header1.js';
import Input1 from '../../components/input/input1.js';
import InputPassword from '../../components/input/inputPassword.js';
import Button1 from '../../components/buttons/button1';
import ButtonNoLine from '../../components/buttons/buttonNoLine';
import ButtonNaver from '../../components/buttons/buttonNaver';
import ButtonKakao from '../../components/buttons/buttonKakao';
import GreyText from '../../components/text/greyText';
import HorizontalNationalPhone from '../../components/common/horizontalNationalPhone';

const SignIn1 = ({navigation}) => {
  const [selectedInfo, setSelectedInfo] = useState({
    nationalCode: '',
    phoneNo: '',
  });
  const onValueChange = value => {
    setSelectedInfo(prevState => ({
      ...prevState,
      nationalCode: value,
    }));
  };
  const onValueChangePhoneNo = e => {
    setSelectedInfo(prevState => ({
      ...prevState,
      phoneNo: e,
    }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header1 title={'로그인/ 회원가입'} />
      <View style={styles.form}>
        <HorizontalNationalPhone
          onChangeValue={onValueChange}
          onChangeValue2={onValueChangePhoneNo}
          value={selectedInfo.nationalCode}
          value2={selectedInfo.phoneNo}
          index={0}
        />
        <Button1
          text={'시작하기'}
          onPress={() => navigation.navigate('SmsCode')}
        />
      </View>
      <View style={styles.or}>
        <GreyText text={'OR'} />
      </View>
      <View style={styles.others}>
        <ButtonKakao text={'카카오로 시작하기'} />
        <ButtonNaver text={'네이버로 시작하기'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', //세로
    alignItems: 'center', //가로
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  form: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {},
  others: {margin: 20},

  forgot_password: {
    alignSelf: 'flex-end',
  },
});
export default SignIn1;
