import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import PerRowPhotoContent from '../../../components/common/perRowPhotoContent';

const tabFeedView = props => {
  const items = [
    {key: 1, img_url: require('../../../assets/images/temp/tmp1.png')},
    {key: 2, img_url: require('../../../assets/images/temp/tmp2.png')},
    {key: 3, img_url: require('../../../assets/images/temp/tmp3.png')},
    {key: 4, img_url: require('../../../assets/images/temp/tmp4.png')},
  ];
  let row = items.length / 3; //몫
  const left = items.length % 3; //나머지

  if (left > 0) {
    row + 1;
  }

  const rowItems = [];
  for (let i = 0; i < row; i++) {
    rowItems.push(
      <PerRowPhotoContent
        i={i}
        items={items}
        onPress={item => console.log(item)}
      />,
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>{rowItems}</ScrollView>
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
