import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import HeaderWhiteWithComponent from '../../../components/common/headerWhiteWithComponent';
import BottomSlideUpDownAddmodal from '../../../components/modal/bottomSlideUpDownAddmodal';
import ButtonBigAdd from '../../../components/buttons/buttonBigAdd';
const {width, height} = Dimensions.get('window');

const communityAdd = ({navigation}) => {
  const [contents, setContents] = useState({title: '', content: ''});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photos, setPhotos] = useState([]);

  const onCloseAddModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  console.log(photos);
  return (
    <View style={styles.container}>
      <HeaderWhiteWithComponent
        title={'Create Post'}
        onClose={() => navigation.navigate('Community')}
        onNext={() => navigation.navigate('Community')}
      />
      <View style={{marginTop: 50}}>
        <TextInput
          style={styles.textTitle}
          placeholder={'제목...'}
          placeholderTextColor="#6F8BA4"
          value={contents.title}
          onChangeText={event => setContents({...contents, title: event})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="내용..."
          placeholderTextColor="#6F8BA4"
          multiline={true}
          value={contents.content}
          onChangeText={event => setContents({...contents, content: event})}
        />
        <ScrollView horizontal style={{flexDirection: 'row', margin: 10}}>
          {photos.map((photo, index) => {
            console.log('-------------------------');
            console.log(photo.node.image.uri);
            return (
              <Image
                key={index}
                style={{
                  width: 90,
                  height: 90,
                  margin: 5,
                  borderRadius: 14,
                }}
                source={{uri: photo.node.image.uri}}
              />
            );
          })}
          <ButtonBigAdd onPress={() => setIsModalVisible(!isModalVisible)} />
        </ScrollView>
        <BottomSlideUpDownAddmodal
          isVisible={isModalVisible}
          onClose={onCloseAddModal}
          setPhotos={setPhotos}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
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

export default communityAdd;
