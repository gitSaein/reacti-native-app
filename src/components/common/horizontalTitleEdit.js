import React from 'react';
import {View} from 'react-native';
import InputNoLineTextGrey from '../../components/input/inputNoLineTextGrey';
import GreyTitle from '../../components/text/greyTitle';

const horizontalTitleEdit = ({title, value, onChangeText, index}) => {
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
      <View style={{flex: 1, alignItems: 'center'}}>
        <GreyTitle text={title} />
      </View>
      <View style={{flex: 2, justifyContent: 'flex-start'}}>
        <InputNoLineTextGrey onChangeText={onChangeText} value={value} />
      </View>
    </View>
  );
};
export default horizontalTitleEdit;
