import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import WhiteTitle from '../text/whiteTitle';
import ButtonWhiteLeft from '../buttons/buttonWhiteLeft';
import ButtonDone from '../buttons/buttonCustomizedText';

const {height} = Dimensions.get('window');

const headerPurpleLeftDone = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ButtonWhiteLeft onPress={props.onLeft} />
      </View>
      <View style={{flex: 7.5, paddingLeft: '30%', justifyContent: 'center'}}>
        <WhiteTitle text={props.title} />
      </View>
      <View
        style={{
          flex: 1.5,
          alignContent: 'flex-end',
          justifyContent: 'center',
        }}>
        <ButtonDone onNext={props.onNext} text={'Done'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: height * 0.1,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
export default headerPurpleLeftDone;
