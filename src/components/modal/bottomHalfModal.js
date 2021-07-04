import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

import Chips from '../chip/chips';

const {width, height} = Dimensions.get('window');

import ProfileTitle from '../../components/text/profileTitle';

const bottomHalfModal = ({isOpen, toggleModal, selectItem, items}) => {
  return (
    <Modal
      isVisible={isOpen}
      deviceHeight={height}
      deviceWidth={width}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      onBackdropPress={toggleModal}
      backdropOpacity={0}
      style={{justifyContent: 'flex-end'}}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Icon name="window-minimize" size={20} color="grey" />
        </View>
        <ScrollView
          style={{borderRadius: 16, alignContent: 'flex-start', padding: 10}}>
          <TouchableOpacity
            style={{alignSelf: 'center', height: 40, padding: 10}}
            onPress={toggleModal}
          />
          {items.length > 0 &&
            items.map((item, key) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    padding: 10,
                  }}
                  key={key}
                  onPress={() => selectItem(item)}>
                  <Chips items={item.category} />
                  <ProfileTitle text={`${item.title}`} />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: height / 2,
    bottom: 0,
    margin: 5,
  },
});

export default bottomHalfModal;
