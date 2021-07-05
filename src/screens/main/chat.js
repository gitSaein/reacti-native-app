import React from 'react';
import {View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonAction from '../../components/buttons/buttonAction';

const chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ButtonAction
        items={[
          {title: 'secret chat', color: '#99FFCC', icon: 'lock-closed-outline'},
          {title: 'open chat', color: '#FFFF66', icon: 'lock-open-outline'},
        ]}
        onPress={item => console.log(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 53,
  },
});

export default chat;
