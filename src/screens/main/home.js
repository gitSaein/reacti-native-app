import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import HeaderWithComponent from '../../components/common/headerWithComponent';
import HeaderSearchInput from '../../components/input/headerSearchInput';
import ButtonAdd from '../../components/buttons/buttonAdd';

const feeds = [
  {
    id: '1',
    title: "What's New",
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
  {
    id: '2',
    title: 'Sides2',
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
  {
    id: '3',
    title: 'Sides3',
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
  {
    id: '4',
    title: 'Sides4',
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
  {
    id: '5',
    title: 'Sides5',
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
  {
    id: '6',
    title: 'Sides6',
    image: require('../../assets/images/temp/WhatsNew2.png'),
  },
];
const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.user} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};
const home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithComponent
        leftComponent={<HeaderSearchInput placeholder={'Search'} />}
        rightComponent={<ButtonAdd />}
      />
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={feeds}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        style={styles.scrollView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  scrollView: {
    marginTop: 60,
    width: 450,
    height: 225,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 189,
    width: 220,
    top: 36,
    margin: 10,
  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 18,
  },
  user: {
    width: 130,
    height: 30,
  },
});

export default home;
