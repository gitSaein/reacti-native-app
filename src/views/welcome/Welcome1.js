import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

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
        <TouchableOpacity style={styles.button} onPress={onDone}>
          <Text>Press Here</Text>
        </TouchableOpacity>
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
        <Text>HJ</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={onDone}
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
    top: 40,
    left: 20,
  },
  text_title: {
    position: 'absolute',
    height: 19,
    width: 80,
    left: '37.22%',
    right: '36.89%',
    top: 420,

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
    left: 0,
    top: 0,
    borderRadius: 0,
  },
});

export default welcome1;
