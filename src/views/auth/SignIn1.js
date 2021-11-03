import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Header1 from '../../components/header/header1.js';
import Button1 from '../../components/buttons/button1';
import ButtonNaver from '../../components/buttons/buttonNaver';
import ButtonKakao from '../../components/buttons/buttonKakao';
import GreyText from '../../components/text/greyText';
import HorizontalNationalPhone from '../../components/common/horizontalNationalPhone';
import * as KakaoLogins from '@react-native-seoul/kakao-login';

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

  const loginByNaver = () => {};

  const loginByKakao = () => {
    console.log('   kakaoLogin   ');
    KakaoLogins.login()
      .then(result => {
        console.log(`Login Finished:${JSON.stringify(result)}`);
        getProfile();
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          console.log(`Login Cancelled:${err.message}`);
        } else {
          console.log(`Login Failed:${err.code} ${err.message}`);
        }
        return false;
      });
    return true;
  };

  const getProfile = () => {
    console.log('   kakaoProfile   ');
    KakaoLogins.getProfile()
      .then(result => {
        if (result) {
          let re = JSON.stringify(result);
          console.log(`Get Profile Finished:${re}`);
        }
        // 이후 result.id를 활용해서 로그인 로직을 구현해주세용
      })
      .catch(err => {
        console.error('Get Profile Failed');
        console.error(err);
      });
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
        <ButtonKakao text={'카카오로 시작하기'} onPress={loginByKakao} />
        <ButtonNaver text={'네이버로 시작하기'} onPress={loginByNaver} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', //세로
    alignItems: 'center', //가로
    backgroundColor: 'white',
  },
  form: {
    padding: 20,
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {flex: 1, justifyContent: 'center'},
  others: {margin: 20, flex: 3, justifyContent: 'flex-start'},
});
export default SignIn1;
