import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const selectBoxWithSearch = ({items, setItems}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <DropDownPicker
      placeholder="category..."
      searchable={true}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{borderWidth: 1, borderColor: '#F9F9F9'}}
      placeholderStyle={{
        color: 'grey',
        fontWeight: 'bold',
      }}
    />
  );
};

export default selectBoxWithSearch;
