import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import WhiteTitle from '../../components/text/whiteTitle';

import HeaderPurpleChatInfo from '../../components/header/headerPurpleChatInfo';
import ButtonWhiteLeft from '../../components/buttons/buttonWhiteLeft';
import ButtonWhiteMoreHorizontal from '../../components/buttons/buttonWhiteMoreHorizontal';
import MessageByMe from '../../components/common/messageByMe';
import MessageByOthers from '../../components/common/messageByOthers';

const chatDetail = ({route, navigation}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <HeaderPurpleChatInfo
        item={item}
        onLeft={() => navigation.navigate('Chat')}
      />
      <MessageByOthers item={item} />
      <MessageByMe item={item} />
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
