import React from 'react';
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import HeadePurpleSearchAdd from '../../components/header/headePurpleSearchAdd';
import GroupConent from '../../components/common/groupConent';

import Chips from '../../components/chip/chips';

const group = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeadePurpleSearchAdd />
      <View style={{height: 50}}>
        <ScrollView horizontal>
          <Chips
            items={[
              {label: '#사는이야기'},
              {label: '#요리'},
              {label: '# 강아지'},
              {label: '#사는이야기'},
              {label: '#요리'},
              {label: '# 강아지'},
              {label: '#사는이야기'},
              {label: '#요리'},
              {label: '# 강아지'},
              {label: '#사는이야기'},
              {label: '#요리'},
              {label: '# 강아지'},
            ]}
          />
        </ScrollView>
      </View>
      <View style={{flex: 2}}>
        <ScrollView>
          <GroupConent
            item={{
              id: '1',
              title: 'Kim',
              profileImage: require('../../assets/images/temp/middleProfile.png'),
              contents: 'hi my name is saein lee',
            }}
          />
          <GroupConent
            item={{
              id: '2',
              title: 'Kim2',
              profileImage: require('../../assets/images/temp/middleProfile.png'),
              contents: 'hi my name is saein lee',
            }}
          />
          <GroupConent
            item={{
              id: '3',
              title: 'Kim3',
              profileImage: require('../../assets/images/temp/middleProfile.png'),
              contents: 'hi my name is saein lee',
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});

export default group;
