import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Button1 from '../../components/buttons/button1';
import GreyTitle from '../../components/text/greyTitle';
import HorizontalNationalPhone from '../../components/common/horizontalNationalPhone';

const smsPhoneNumber = ({navigation}) => {
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
    <View style={styles.container}>
      <GreyTitle text={'핸드폰 번호를 입력하세요'} />
      <View style={{padding: 10}} />
      <HorizontalNationalPhone
        onChangeValue={onValueChange}
        onChangeValue2={onValueChangePhoneNo}
        value={selectedInfo.nationalCode}
        value2={selectedInfo.phoneNo}
        index={0}
      />
      <Button1 text={'다음'} onPress={() => navigation.navigate('SmsCode')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //세로
    alignItems: 'center', //가로
    backgroundColor: '#ffffff',
    padding: 20,
  },
});
export default smsPhoneNumber;
