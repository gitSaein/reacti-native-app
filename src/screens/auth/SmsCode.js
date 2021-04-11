import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Button1 from '../../components/buttons/button1';
import GreyTitle from '../../components/text/greyTitle';
import CustomInput from '../../components/input/customInput';
const smsCode = ({navigation}) => {
  const [sms, setSelectedInfo] = useState(
    {
      n1: 0,
      n2: 0,
      n3: 0,
      n4: 0,
    },
    [],
  );
  const onChangeCode1 = e => {
    const {text} = e.nativeEvent;
    setSelectedInfo(prevState => ({
      ...prevState,
      n1: text,
    }));
  };
  const onChangeCode2 = e => {
    const {text} = e.nativeEvent;
    setSelectedInfo(prevState => ({
      ...prevState,
      n2: text,
    }));
  };
  const onChangeCode3 = e => {
    const {text} = e.nativeEvent;
    setSelectedInfo(prevState => ({
      ...prevState,
      n3: text,
    }));
  };
  const onChangeCode4 = e => {
    const {text} = e.nativeEvent;
    setSelectedInfo(prevState => ({
      ...prevState,
      n4: text,
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <GreyTitle text={'SMS로 전송된 인증번호 4자리를 입력하세요.'} />
      </View>
      <View style={styles.input}>
        <CustomInput
          multiline
          maxLength={1}
          borderBottomWidth={1}
          placeholder={''}
          value={sms.n1}
          onEndEditing={onChangeCode1}
          returnKeyType="done"
          keyboardType={'number-pad'}
        />
        <CustomInput
          multiline
          maxLength={1}
          borderBottomWidth={1}
          placeholder={''}
          keyboardType={'number-pad'}
          returnKeyType="done"
          value={sms.n2}
          onEndEditing={onChangeCode2}
        />
        <CustomInput
          multiline
          maxLength={1}
          borderBottomWidth={1}
          placeholder={''}
          keyboardType={'number-pad'}
          returnKeyType="done"
          value={sms.n3}
          onEndEditing={onChangeCode3}
        />
        <CustomInput
          multiline
          maxLength={1}
          borderBottomWidth={1}
          placeholder={''}
          keyboardType={'number-pad'}
          returnKeyType="done"
          value={sms.n4}
          onEndEditing={onChangeCode4}
        />
      </View>
      <Button1 text={'다음'} onPress={() => navigation.navigate('Welcome1')} />
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
export default smsCode;
