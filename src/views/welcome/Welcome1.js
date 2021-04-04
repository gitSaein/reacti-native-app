import React, {useState, useCallback} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button1 from '../../components/buttons/button1';

const Welcome1 = ({navigation}) => {
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
        <Button1
          text={'내 위치로 시작하기'}
          onPress={() => navigation.navigate('SignIn1')}
        />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.text_title}>{item.title}</Text>
        </View>
      </View>
    );
  };
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
});

export default Welcome1;
