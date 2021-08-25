import React from 'react';
import {View} from 'react-native';
import SelectBox from '../input/selectBox';
import GreyTitle from '../text/greyTitle';

const horizontalTitleSelect = ({title, items, value, onChangeValue, index}) => {
  return (
    <View
      key={index}
      style={{
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F9F9F9',
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <GreyTitle text={title} />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
        }}>
        <SelectBox
          items={items}
          onValueChange={onChangeValue}
          selectedValue={value}
        />
      </View>
    </View>
  );
};
export default horizontalTitleSelect;
