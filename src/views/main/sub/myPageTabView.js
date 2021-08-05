import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedView from './myPageFeedView';
import LikeView from './myPageLikeView';

const renderScene = SceneMap({
  first: FeedView,
  second: LikeView,
});

const myPageTabView = () => {
  const {width} = Dimensions.get('window');

  const [index, setIndex] = useState(0);
  const [routes] = useState([{key: 'first'}, {key: 'second'}]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'white'}}
      renderIcon={({route, focused, color}) => {
        switch (route.key) {
          case 'first':
            return (
              <Icon
                size={25}
                name={focused ? 'create' : 'create-outline'}
                color={focused ? '#6F8BA4' : '#DDDCFF'}
              />
            );
          case 'second':
            return (
              <Icon
                size={25}
                name={focused ? 'heart-sharp' : 'heart-outline'}
                color={focused ? '#6F8BA4' : '#DDDCFF'}
              />
            );
        }
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: width}}
    />
  );
};

export default myPageTabView;
