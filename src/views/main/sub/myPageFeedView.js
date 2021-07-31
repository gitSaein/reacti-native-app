import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import PerRowPhotoContent from '../../../components/common/perRowPhotoContent';

const tabFeedView = props => {
  const items = [
    {img_url: require('../../../assets/images/temp/tmp1.png')},
    {img_url: require('../../../assets/images/temp/tmp2.png')},
    {img_url: require('../../../assets/images/temp/tmp3.png')},
    {img_url: require('../../../assets/images/temp/tmp4.png')},
  ];
  let row = items.length / 3; //몫
  const left = items.length % 3; //나머지

  if (left > 0) {
    row + 1;
  }

  const rowItems = [];
  for (let i = 0; i < row; i++) {
    rowItems.push(<PerRowPhotoContent i={i} items={items} />);
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
