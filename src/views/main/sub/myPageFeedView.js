import React from 'react';
import {FlatList} from 'react-native';
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
    <FlatList
      data={items}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <FeedContent item={item} onPress={onPress} />}
      onPress={onPress}
    />
  );
  s;
};

export default tabFeedView;
