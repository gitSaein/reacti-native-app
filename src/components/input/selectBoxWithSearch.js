import React, {useState} from 'react';
import {Dimensions, View, Text, Image, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const {width} = Dimensions.get('window');

const selectBoxWithSearch = ({items, setItems}) => {
  const [dropdown, setDropdown] = useState(null);
  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <Dropdown
      style={styles.dropdown2}
      data={items}
      search
      searchPlaceholder="Search"
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={dropdown}
      onChange={item => {
        setItems(item.value);
      }}
      renderItem={item => _renderItem(item)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dropdown2: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 10,
    padding: 8,
    width: width * 0.85,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});

export default selectBoxWithSearch;
