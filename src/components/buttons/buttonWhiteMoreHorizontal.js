import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttonWhiteMoreHorizontal = ({onPress, visible, isMine}) => {
  if (false) {
    return (
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/images/icon/more_horizontal_icon.png')}
            />
          </TouchableOpacity>
        }
        onRequestClose={onPress}>
        <MenuItem onPress={onPress}>수정</MenuItem>
        <MenuItem onPress={onPress}>삭제</MenuItem>
      </Menu>
    );
  } else {
    return (
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../../assets/images/icon/more_horizontal_icon.png')}
            />
          </TouchableOpacity>
        }
        onRequestClose={onPress}>
        <MenuItem onPress={onPress}>
          <Ionicons name="alert-circle-outline" />
          &nbsp;신고
        </MenuItem>
      </Menu>
    );
  }
};

export default buttonWhiteMoreHorizontal;
