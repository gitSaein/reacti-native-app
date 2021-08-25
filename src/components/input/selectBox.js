import React from 'react';
import {StyleSheet, Picker} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

const selectBox = props => {
  return (
    <Picker
      mode={'dropdown'}
      selectedValue={props.selectedValue}
      style={styles.boxWithShadow}
      itemStyle={{backgroundColor: 'green'}}
      onValueChange={itemValue => props.onValueChange(itemValue)}>
      {props.items.map((item, key) => (
        <Picker.Item
          color={'#636363'}
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
    width: '100%',
    borderRadius: 14,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 10,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  item: {
    fontSize: 14,
    backgroundColor: 'green',
  },
});

export default selectBox;
