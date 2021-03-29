import React, {useState, useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SignIn1 from '../auth/signIn1.js';
import Button1 from '../../components/buttons/button1';

const welcome1 = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const keyExtractor = item => item.title;

  const slides = [
    {
      title: 'Welcome',
      text: 'Description.\nSay something cool',
      image: require('../../assets/images/ImageWelcome1.png'),
    },
  ];

  const renderDoneButton = () => {
    return (
      <View>
        <Button1 onDone={onDone} text="내 위치로 시작" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.text_title}>{item.title}</Text>
          <Text style={styles.text_contents}>{item.text}</Text>
        </View>
      </View>
    );
  };

  if (showRealApp) {
    return (
      <View style={styles.container}>
        <SignIn1 />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          renderDoneButton={renderDoneButton}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    left: '37.22%',
    right: '36.89%',
    top: 106,

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
  text_contents: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: 10,
    bottom: '0%',

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 26,
    /* or 186% */

    textAlign: 'center',
    letterSpacing: 0.5,

    color: '#6F8BA4',
  },
  button: {
    backgroundColor: '#504DE5',
    height: 50,
    width: 347,
    borderRadius: 25,
  },
  button_text: {
    position: 'absolute',
    height: 14,
    left: 133,
    top: 18,

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 1,

    color: '#FFFFFF',
  },
});

export default welcome1;
