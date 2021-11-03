import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

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

  useEffect(() => {
    connect_web_socket();
    return () => disconnect();
  }, []);

  const connect_web_socket = () => {
    client.current = new StompJs.Client();

    client.current.configure({
      brokerURL: 'ws://10.0.2.2:15674/ws',
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      connectHeaders: {
        login: 'guest',
        passcode: 'guest',
      },
      // debug: function (str) {
      //   console.log('start debug');
      //   console.log(str);
      // },
      reconnectDelay: 5000,
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      // webSocketFactory: () => {
      //   return new SockJS('http://10.0.2.2:15674/ws');
      // },
    });

    client.current.onConnect = function (frame) {
      console.log('onConnect');
      console.log(frame);

      client.current.subscribe(
        `/exchange/message.topic/message.room.${ROOM_SEQ}`,
        response => {
          if (response.body) {
            console.log('got message with body ');
            console.log(response.body);
          } else {
            console.log('got empty message');
          }
        },
      );
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
    };
    if (typeof WebSocket !== 'function') {
      client.current.webSocketFactory = function () {
        return new SockJS('http://10.0.2.2:15674/stomp');
      };
    }
    client.current.onStompError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log('Broker reported error: ' + frame.headers.message);
      console.log('Additional details: ' + frame.body);
    };

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
    setConnected(false);
  };

  const publish = msg => {
    if (!connected) {
      console.log('# start reconnection...');
      connect_web_socket();
    }

    console.log('# start send message...');
    let dd = JSON.stringify({
      roomIdx: 1,
      messageType: 'C',
      senderIdx: 1,
      message: msg,
    });

    client.current.publish({
      destination: `/exchange/message.topic/message.room.${ROOM_SEQ}`,
      body: 'd',
      headers: {priority: '9'},
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
