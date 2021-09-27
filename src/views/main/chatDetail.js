import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';

import HeaderPurpleChatInfo from '../../components/header/headerPurpleChatInfo';
import MessageByMe from '../../components/text/messageByMe';
import MessageByOthers from '../../components/text/messageByOthers';
import InputMessageSender from '../../components/input/inputMessageSender';

const chatDetail = ({route, navigation}) => {
  const item = route.params;
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState('');

  const client = useRef();
  const ROOM_SEQ = 1;
  var socket = '';
  var stompClient = '';

  useEffect(() => {
    connect_1();
    return () => disconnect();
  }, []);

  const connect_1 = () => {
    socket = new SockJS('http://10.0.2.2:9000/ws');
    client.current = Stomp.over(socket);
    client.current.connect(
      {},
      frame => {
        setConnected(true);
        stompClient.subscribe(`/topic/chat/${ROOM_SEQ}`, tick => {
          console.log('[result] ' + tick);
        });
      },
      error => {
        console.error(error);
        setConnected(false);
      },
    );
  };

  const disconnect = () => {
    console.log('disconnect start...');
    client.current.deactivate();
    setConnected(false);
  };

  const publish = msg => {
    if (!connected) {
      console.log('# start reconnection...');
      connect_1();
    }

    console.log('# start send message...');
    let dd = JSON.stringify({message: msg});
    console.log(dd);
    client.current.send(`/app/chat/${ROOM_SEQ}`, dd);

    setMessage('');
  };

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
      <InputMessageSender
        value={message}
        onPress={msg => {
          if (msg) {
            console.log('message: ' + msg);
            publish(msg);
          }
        }}
      />
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
