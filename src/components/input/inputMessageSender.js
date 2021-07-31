import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonClipInactive from '../buttons/buttonClipInactive';
import ButtonSender from '../buttons/buttonSender';
import NoLineInput from './noLineInput';

const messageInputSender = props => {
  return (
    <View style={styles.chatInput}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ButtonClipInactive />
      </View>
      <View
        style={{
          flex: 6,
          paddingTop: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <NoLineInput />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'flex-start',
          alignItems: 'center',
        }}>
        <ButtonSender />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatInput: {
    alignSelf: 'center',
    borderRadius: 24,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    width: 347,
    height: 48,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
});
export default messageInputSender;
