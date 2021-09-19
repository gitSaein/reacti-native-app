import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import HeaderPurpleChatInfo from '../../components/header/headerPurpleChatInfo';
import MessageByMe from '../../components/text/messageByMe';
import MessageByOthers from '../../components/text/messageByOthers';
import InputMessageSender from '../../components/input/inputMessageSender';

const chatDetail = ({route, navigation}) => {
  const item = route.params;
  const [message, setMessage] = useState('');
  const client = useRef({});
  const ROOM_SEQ = 1;

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    console.log('connect start...');
    client.current = new StompJs.Client({
      // brokerURL: "ws://localhost:9000/ws", // 웹소켓 서버로 직접 접속
      webSocketFactory: () => new SockJS('http://localhost:9000/ws'), // proxy를 통한 접속
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: frame => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    console.log('disconnect start...');
    client.current.deactivate();
  };

  const subscribe = () => {
    console.log('subscribe start...');
    client.current.subscribe(`/topic/chat/${ROOM_SEQ}`, ({body}) => {
      setMessage(_chatMessages => [..._chatMessages, JSON.parse(body)]);
    });
  };

  const publish = msg => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: '/pub/chat',
      body: JSON.stringify({roomSeq: ROOM_SEQ, msg}),
    });

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
