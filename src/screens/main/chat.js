import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import ButtonAction from '../../components/buttons/buttonAction';
import HeaderSearchInput from '../../components/input/headerSearchInput';
import ProfileTitle from '../../components/text/profileTitle';
import HeaderWithComponent from '../../components/common/headerWithComponent';
import MessageInfo from '../../components/common/messageInfo';

const chat = ({navigation}) => {
  const messageInfoList = [
    {
      title: 'kim',
      message: 'hi nice to meet you',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      updateDate: '11:30',
    },
    {
      title: 'sora',
      message: 'hi hi hi',
      imageUrl: require('../../assets/images/temp/middleProfile.png'),
      updateDate: '2021.07.07',
    },
  ];
  return (
    <View style={styles.container}>
      <HeaderWithComponent
        leftComponent={<HeaderSearchInput placeholder={'Search'} />}
      />
      <View style={{marginTop: 90, alignSelf: 'flex-start'}}>
        <ProfileTitle text={'Message'} />
        <ScrollView>
          {messageInfoList.length > 0 &&
            messageInfoList.map((item, index) => {
              return (
                <TouchableOpacity>
                  <MessageInfo item={item} index={index} />
                </TouchableOpacity>
              );
            })}
          <TouchableOpacity />
        </ScrollView>
      </View>

      <ButtonAction
        items={[
          {
            title: 'secret chat',
            color: '#99FFCC',
            icon: 'lock-closed-outline',
          },
          {title: 'open chat', color: '#FFFF66', icon: 'lock-open-outline'},
        ]}
        onPress={item => console.log(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default chat;
