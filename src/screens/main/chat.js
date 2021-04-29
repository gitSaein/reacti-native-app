import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import Button1 from '../../components/buttons/button1';

const chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>{Platform.OS}</Text>
      <Text style={styles.text_title}>{Platform.Version}</Text>
      <Button1 text={'chat'} onPress={() => navigation.navigate('SignIn1')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: 347,
    height: 350,
    top: 231,
    left: 14,
  },
  text_title: {
    position: 'absolute',
    height: 19,
    width: 80,
    marginTop: '115%',

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    /* identical to box height */

    textAlign: 'center',
    letterSpacing: 1,

    color: '#3B566E',
  },
});

export default chat;
