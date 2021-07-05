import React from 'react';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const buttonAction = ({items, onPress}) => {
  const menuList =
    items &&
    items.map(item => (
      <ActionButton.Item
        buttonColor={item.color}
        title={item.title}
        onPress={() => onPress(item)}>
        <Icon name={item.icon} size={25} />
      </ActionButton.Item>
    ));
  return <ActionButton buttonColor="#FF028A">{menuList}</ActionButton>;
};

export default buttonAction;
