import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';

import HeaderPurpleChatInfo from '../../components/header/headerPurpleChatInfo';
import MessageByMe from '../../components/text/messageByMe';
import MessageByOthers from '../../components/text/messageByOthers';
import InputMessageSender from '../../components/input/inputMessageSender';

const chatDetail = ({route, navigation}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <HeaderPurpleChatInfo
        item={item}
        onLeft={() => navigation.navigate('Chat')}
      />
      <ScrollView style={{flex: 4}}>
        <MessageByOthers item={item} />
        <MessageByMe item={item} />
        <MessageByMe item={item} />
        <MessageByMe item={item} />
        <MessageByMe item={item} />
        <MessageByOthers item={item} />
        <MessageByOthers item={item} />
        <MessageByOthers item={item} />
      </ScrollView>
      <InputMessageSender />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
});

export default chatDetail;
