import React from 'react';
import {useState, useRef, useCallback} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Button1 from '../../components/buttons/button1';
import GreyTitle from '../../components/text/greyTitle';
import CustomInput from '../../components/input/customInput';
const smsCodeView = ({navigation}) => {
  const [smsCode, setSmsCode] = useState([0, 0, 0, 0]);
  const textRef = Array(4)
    .fill(0)
    .map(i => React.useRef(null));

  const onChangeCode1 = (e, idx) => {
    setSmsCode(smsCode.map((v, i) => (i === idx ? (v = e) : v)));
    ++idx;

    if (e && idx < textRef.length) {
      textRef[idx].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <GreyTitle text={'SMS로 전송된 인증번호 4자리를 입력하세요.'} />
      </View>
      <View style={styles.input}>
        {smsCode.map((e, i) => {
          return (
            <CustomInput
              key={i}
              ref={textRef[i]}
              multiline
              maxLength={1}
              borderBottomWidth={1}
              value={e}
              onChangeText={value => onChangeCode1(value, i)}
              returnKeyType="next"
              keyboardType={'numeric'}
            />
          );
        })}
      </View>
      <Button1 text={'다음'} onPress={() => navigation.navigate('Home')} />
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
export default smsCodeView;
