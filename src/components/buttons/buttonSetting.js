import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttonSetting = ({onPress, visible, isMine}) => {
  if (false) {
    return (
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../../assets/images/icon/setting.png')} />
          </TouchableOpacity>
        }
        onRequestClose={onPress}>
        <MenuItem onPress={onPress}>전체설정</MenuItem>
      </Menu>
    );
  } else {
    return (
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../../assets/images/icon/setting.png')} />
          </TouchableOpacity>
        }
        onRequestClose={onPress}>
        <MenuItem onPress={onPress}>이 프로필 공유하기</MenuItem>
        <MenuItem onPress={onPress}>차단</MenuItem>
        <MenuItem onPress={onPress}>
          <Ionicons name="alert-circle-outline" />
          &nbsp;신고
        </MenuItem>
      </Menu>
    );
  }
};

export default buttonSetting;
