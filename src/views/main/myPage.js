import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import GroupView from './group';
const renderScene = SceneMap({
  first: GroupView,
  second: GroupView,
});

import HeaderPurpleAddSetting from '../../components/header/headerPurpleAddSetting.js';
const myPage = ({navigation}) => {
  const {width} = Dimensions.get('window');

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <View style={styles.container}>
      <HeaderPurpleAddSetting title={'my page'} />
      <View style={styles.profile} />
      <View style={styles.tab}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: width}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  tab: {
    flex: 2,
    backgroundColor: 'yellow',
  },
  profile: {flex: 1, backgroundColor: 'red'},
});

export default myPage;
