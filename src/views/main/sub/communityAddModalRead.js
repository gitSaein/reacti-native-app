import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

import HeaderWithShare from '../../../components/header/headerWithShare';
import Chips from '../../../components/chip/chips';

const {height, width} = Dimensions.get('window');

const communityAddModalRead = ({isOpen, setIsOpen, contents}) => {
  if (isOpen && contents) {
    return (
      <Modal isVisible={isOpen} style={styles.container}>
        <HeaderWithShare
          onClose={() => setIsOpen(false)}
          onNext={() => setIsOpen(false)}
        />
        <View>
          <ScrollView horizontal style={{flexDirection: 'row', height: 20}}>
            {contents.photo.length > 0 &&
              contents.photo.map((photo, index) => {
                return (
                  <Image
                    key={index}
                    style={{
                      width: width - 41.2,
                      height: height * 0.4,
                    }}
                    source={{uri: photo.node.image.uri}}
                  />
                );
              })}
          </ScrollView>
        </View>
        <Text style={styles.textTitle}>{contents.title}</Text>
        <ScrollView>
          <Text style={styles.textInput}>{contents.content}</Text>
        </ScrollView>
        <Chips items={contents.category} />
      </Modal>
    );
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textTitle: {
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#F9F9F9',
    margin: 10,
    height: Math.max(35, height / 5),
  },
});

export default communityAddModalRead;
