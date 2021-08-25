import React from 'react';
import {View} from 'react-native';
import InputNoLineTextGrey from '../input/inputNoLineTextGrey';
import GreyTitle from '../text/greyTitle';
import {Button} from 'react-native-elements';

const horizontalTitleEditButton = ({
  title,
  value,
  onChangeText,
  index,
  keyboardType,
  editable,
  buttonTitle,
  onPress,
}) => {
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
      <View style={{flex: 2, justifyContent: 'flex-start'}}>
        <InputNoLineTextGrey
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Button title={buttonTitle} type="Clear" onPress={onPress} />
      </View>
    </View>
  );
};
export default horizontalTitleEditButton;
