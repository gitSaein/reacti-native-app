import React, {useState} from 'react';
import {Dimensions, Badge} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const {width} = Dimensions.get('window');

const selectBoxWithSearch = ({items, setItems}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <DropDownPicker
      placeholder="category..."
      searchable={true}
      searchPlaceholder="Search..."
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={setItems}
      style={{
        borderWidth: 1,
        borderColor: '#F9F9F9',
        margin: 5,
        width: width - 10,
      }}
      placeholderStyle={{
        color: 'grey',
        fontWeight: 'bold',
      }}
    />
  );
};

export default selectBoxWithSearch;
