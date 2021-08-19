import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Button1 from '../../components/buttons/button1';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{margin: 60}}
        source={require('../../assets/images/temp/ImageWelcome1.png')}
      />
      <Button1
        text={'내 위치로 시작하기'}
        onPress={() => navigation.navigate('SignIn1')}
      />
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
});

export default Welcome;
