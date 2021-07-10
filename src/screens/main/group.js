import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import HeaderWithComponent from '../../components/common/headerWithComponent';
import HeaderSearchInput from '../../components/input/headerSearchInput';
import ButtonAdd from '../../components/buttons/buttonAdd';
import GroupConent from '../../components/common/groupConent';

import Chips from '../../components/chip/chips';
const {height, width} = Dimensions.get('window');

const group = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderWithComponent
          leftComponent={<HeaderSearchInput placeholder={'Search'} />}
          rightComponent={<ButtonAdd />}
        />
      </View>
      <View style={{margin: 5}}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    margin: 2,
    width: width - 4,
    height: height * 0.1,
  },
  box: {
    backgroundColor: '#FFFFFF',
    margin: 2,
    width: width - 8,
    height: height * 0.3,
    borderRadius: 14,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#29000000',
  },
});

export default group;
