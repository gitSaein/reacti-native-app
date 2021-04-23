import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import HeaderWithComponent from '../../components/common/headerWithComponent';
import HeaderSearchInput from '../../components/input/headerSearchInput';
import ButtonAdd from '../../components/buttons/buttonAdd';
import CropUserProfile from '../../components/profile/cropUserProfile';
import ProfileTitle from '../../components/text/profileTitle';

const feeds = [
  {
    id: '1',
    title: "What's New",
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '2',
    title: 'Sides2',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '3',
    title: 'Sides3',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '4',
    title: 'Sides4',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '5',
    title: 'Sides5',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
  {
    id: '6',
    title: 'Sides6',
    image: require('../../assets/images/temp/WhatsNew2.png'),
    profileImage: require('../../assets/images/temp/UserProfileCrop.png'),
  },
];

const home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithComponent
        leftComponent={<HeaderSearchInput placeholder={'Search'} />}
        rightComponent={<ButtonAdd />}
      />
      <View style={styles.profileTitle}>
        <ProfileTitle text={"What's New"} />
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={feeds}
          keyExtractor={(item, index) => index}
          renderItem={CropUserProfile}
          style={styles.scrollView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  profileTitle: {flex: 1, marginTop: 60},
  scrollView: {
    height: 225,
  },
});

export default home;
