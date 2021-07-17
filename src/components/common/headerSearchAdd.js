import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

const headerWithComponent = props => {
  return (
    <Header
      {...props}
      containerStyle={styles.containerStyle}
      leftComponent={
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          {props.leftComponent}
        </View>
      }
      centerComponent={
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          {props.centerComponent}
        </View>
      }
      rightComponent={
        <View style={{justifyContent: 'center'}}>{props.rightComponent}</View>
      }
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    height: '12%',
    backgroundColor: '#504DE5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 20,
  },
});
export default headerWithComponent;
