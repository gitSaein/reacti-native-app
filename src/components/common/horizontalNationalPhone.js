import React from 'react';
import {View, StyleSheet} from 'react-native';
import SelectBox from '../input/selectBox';
import SmallPhoneNumInput from '../../components/input/smallPhoneNumInput';

const horizontalNationalPhone = ({
  onChangeValue,
  onChangeValue2,
  value,
  value2,
  index,
}) => {
  const nationalList = [
    {
      label: 'Korea (+82)',
      value: 82,
    },
    {
      label: 'Japan (+81)',
      value: 81,
    },
    {
      label: 'Vietnam (+84)',
      value: 84,
    },
    {
      label: 'China (+86)',
      value: 86,
    },
  ];

  return (
    <View key={index} style={styles.input}>
      <SelectBox
        items={nationalList}
        onValueChange={onChangeValue}
        selectedValue={value}
      />
      <SmallPhoneNumInput
        placeholder={'핸드폰 번호'}
        keyboardType={'number-pad'}
        onChangeText={onChangeValue2}
        value={value2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginBottom: 40,
  },
});
export default horizontalNationalPhone;
