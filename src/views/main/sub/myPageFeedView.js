import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FeedContent from '../../../components/common/feedContent';

const tabFeedView = () => {
  const navigation = useNavigation();

  const items = [
    {
      id: '1',
      title: 'Kim',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
    {
      id: '2',
      title: 'DOGE',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
    {
      id: '3',
      title: 'Sides3',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
    {
      id: '4',
      title: 'Sides4',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
    {
      id: '5',
      title: 'Sides5',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
    {
      id: '6',
      title: 'Sides6',
      profileImage: require('../../../assets/images/temp/middleProfile.png'),
      contents: 'hi my name is saein lee',
    },
  ];
  let row = items.length / 3; //몫
  const left = items.length % 3; //나머지

  if (left > 0) {
    row + 1;
  }

  const onPress = item => {
    navigation.navigate('PhotoDetail', item);
  };

  const rowItems = [];
  for (let i = 0; i < row; i++) {
    rowItems.push(<FeedContent item={items} />);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index}
        renderItem={FeedContent}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  image: {
    borderRadius: 14,
    margin: 5,
    width: 120,
    height: 120,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});

export default tabFeedView;
