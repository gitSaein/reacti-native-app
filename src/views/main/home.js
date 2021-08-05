import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import HeadePurpleSearchAdd from '../../components/header/headePurpleSearchAdd';

import CropUserProfile from '../../components/profile/cropUserProfile';
import ProfileTitle from '../../components/text/profileTitle';
import FeedContent from '../../components/common/feedContent';

const liveFeeds = [
  {
    id: '1',
    content: 'Kim',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '2',
    content: 'DOGE',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '3',
    content: 'Sides3',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '4',
    content: 'Sides4',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '5',
    content: 'Sides5',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '6',
    content: 'Sides6',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
];

const feeds = [
  {
    id: '1',
    title: 'Kim',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
  {
    id: '2',
    title: 'DOGE',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
  {
    id: '3',
    title: 'Sides3',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
  {
    id: '4',
    title: 'Sides4',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
  {
    id: '5',
    title: 'Sides5',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
  {
    id: '6',
    title: 'Sides6',
    profileImage: require('../../assets/images/temp/middleProfile.png'),
    contents: 'hi my name is saein lee',
  },
];

const home = ({navigation}) => {
  const clickNewUser = () => {
    navigation.navigate('PhotoDetail');
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeadePurpleSearchAdd />
      <View style={styles.whatsnew}>
        <ProfileTitle text={"What's New"} />
        <FlatList
          horizontal={true}
          data={liveFeeds}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => CropUserProfile(item, clickNewUser)}
        />
      </View>
      <View style={styles.feed}>
        <FlatList
          data={feeds}
          keyExtractor={(item, index) => index}
          renderItem={FeedContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  whatsnew: {
    flex: 3,
    backgroundColor: '#ffffff',
  },
  feed: {
    flex: 7,
  },
});

export default home;
