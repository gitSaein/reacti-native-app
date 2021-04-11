import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Button1 from '../../components/buttons/button1';
import GreyTitle from '../../components/text/greyTitle';
import SmallPhoneNumInput from '../../components/input/smallPhoneNumInput';
import SelectBox from '../../components/input/selectBox';
const smsPhoneNumber = ({navigation}) => {
  const [selectedInfo, setSelectedInfo] = useState(
    {
      national_code: '',
      phone_no: '',
    },
    [],
  );
  const onValueChange = value => {
    setSelectedInfo(prevState => ({
      ...prevState,
      national_code: value,
    }));
  };

  const onValueChangePhoneNo = e => {
    const {text} = e.nativeEvent;
    setSelectedInfo(prevState => ({
      ...prevState,
      phone_no: text,
    }));
  };
  const national_list = [
    {
      label: 'Korea (+82)',
      value: 'kr',
    },
    {
      label: 'Japan (+81)',
      value: 'jp',
    },
    {
      label: 'Vietnam (+84)',
      value: 'viet',
    },
    {
      label: 'China (+86)',
      value: 'ch',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <GreyTitle text={'핸드폰 번호를 입력하세요'} />
      </View>
      <View style={styles.input}>
        <SelectBox
          items={national_list}
          onValueChange={onValueChange}
          selectedValue={selectedInfo.national_code}
        />
        <SmallPhoneNumInput
          placeholder={'핸드폰 번호'}
          keyboardType={'numeric'}
          onEndEditing={onValueChangePhoneNo}
        />
      </View>
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
  },
  input: {
    flexDirection: 'row',
    marginBottom: 40,
  },
});
export default smsPhoneNumber;
