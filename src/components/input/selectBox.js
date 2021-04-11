import React from 'react';
import {Picker, StyleSheet} from 'react-native';

const selectBox = prop => {
  return (
    <Picker
      mode="dropdown"
      selectedValue={prop.selectedValue}
      style={style.boxWithShadow}
      onValueChange={itemValue => prop.onValueChange(itemValue)}>
      {prop.items.map((item, key) => (
        <Picker.Item key={key} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

const style = StyleSheet.create({
  boxWithShadow: {
    height: 60,
    width: 148,
    borderRadius: 14,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});

export default selectBox;
