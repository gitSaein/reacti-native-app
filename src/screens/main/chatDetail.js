import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import WhiteTitle from '../../components/text/whiteTitle';

import HeaderWithComponent from '../../components/common/headerWithComponent';
import ButtonWhiteLeft from '../../components/buttons/buttonWhiteLeft';
import ButtonWhiteMoreHorizontal from '../../components/buttons/buttonWhiteMoreHorizontal';

const chatDetail = ({route, navigation}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <HeaderWithComponent
        leftComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <ButtonWhiteLeft onPress={() => navigation.navigate('Chat')} />
          </View>
        }
        centerComponent={
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Avatar size="medium" rounded={true} source={item.imageUrl} />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <WhiteTitle text={item.title} />
            </View>
          </View>
        }
        rightComponent={
          <View style={{flex: 1, justifyContent: 'center', marginRight: 10}}>
            <ButtonWhiteMoreHorizontal onPress={() => console.log('hi')} />
          </View>
        }
      />
      <View style={{marginTop: 90, alignSelf: 'flex-start'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

export default chatDetail;
