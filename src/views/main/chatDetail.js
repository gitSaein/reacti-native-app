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
  const [connected, setConnected] = useState(false);

  const client = useRef();
  const ROOM_SEQ = 1;
  var socket = '';

  useEffect(() => {
    connect_1();
    return () => disconnect();
  }, []);

  const connect_1 = () => {
    socket = new SockJS('http://10.0.2.2:9000/gs-guide-websocket');
    client.current = Stomp.over(socket);
    client.current.connect(
      {},
      response => {
        console.log(response);

        setConnected(true);
        client.current.subscribe(`/topic/chat/${ROOM_SEQ}`, tick => {
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
    client.current.disconnect(function () {
      console.log('disconnect start...');
    });
    setConnected(false);
  };

  const publish = msg => {
    if (!connected) {
      console.log('# start reconnection...');
      connect_1();
    }

    console.log('# start send message...');
    let dd = JSON.stringify({message: msg});
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
