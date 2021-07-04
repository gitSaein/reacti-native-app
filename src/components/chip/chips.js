import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Chip} from 'react-native-elements';

const chips = ({items, onPress}) => {
  return (
    items &&
    items.map((item, index) => {
      return (
        <TouchableOpacity
          style={{padding: 5, backgroundColor: 'white', height: 50}}
          onPress={() => onPress(item)}>
          <Chip
            key={index}
            title={item.label}
            type="outline"
            titleStyle={{color: '#504DE5'}}
            containerStyle={{
              borderColor: '#504DE5',
              borderWidth: 0.7,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      );
    })
  );
};

export default chips;
