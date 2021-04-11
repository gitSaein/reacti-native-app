import React from 'react';
import {StyleSheet, Picker} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

const selectBox = props => {
  return (
    <Picker
      mode={'dropdown'}
      selectedValue={props.selectedValue}
      style={styles.boxWithShadow}
      onValueChange={itemValue => props.onValueChange(itemValue)}>
      {props.items.map((item, key) => (
        <Picker.Item
          key={key}
          label={item.label}
          value={item.value}
          style={styles.item}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  boxWithShadow: {
    height: 50,
    width: 150,
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
  item: {
    fontSize: 10,
  },
});

export default selectBox;
