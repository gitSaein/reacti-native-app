import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {Chip} from 'react-native-elements';

import HeaderWhiteWithComponent from '../../../components/common/headerWhiteWithComponent';
import BottomSlideUpDownAddmodal from '../../../components/modal/bottomSlideUpDownAddmodal';
import PhotoGallaryModal from '../../../components/modal/photoGallaryModal';
import ButtonBigAdd from '../../../components/buttons/buttonBigAdd';
import SelectBoxWithSearch from '../../../components/input/selectBoxWithSearch';

const {width, height} = Dimensions.get('window');

const communityAdd = ({navigation}) => {
  const [contents, setContents] = useState({title: '', content: ''});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGallaryModalVisible, setIsGallaryModalVisible] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isCheckedPhoto, setIsCheckedPhoto] = useState(false);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'A', value: 'a'},
    {label: 'B', value: 'b'},
    {label: 'C', value: 'c'},
    {label: 'D', value: 'd'},
    {label: 'E', value: 'e'},
    {label: 'F', value: 'f'},
    {label: 'G', value: 'g'},
  ]);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const onCloseAddModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const openGallaryModal = photo => {
    setPhotos(photo);
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };
  const onCheckedPhotos = () => {
    setIsCheckedPhoto(true);
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };
  const onPhotoGallaryClose = () => {
    setIsCheckedPhoto(false);
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };

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
        <SelectBoxWithSearch setItems={setItems} items={items} />
        <ScrollView horizontal style={{flexDirection: 'row', margin: 10}}>
          {photos.map((photo, index) => {
            if (
              Object.keys(photo).includes('isCheck') &&
              photo.isCheck &&
              isCheckedPhoto
            ) {
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
            }
          })}
          <ButtonBigAdd onPress={() => setIsModalVisible(!isModalVisible)} />
        </ScrollView>
        <BottomSlideUpDownAddmodal
          isVisible={isModalVisible}
          onClose={onCloseAddModal}
          setPhotos={openGallaryModal}
        />
        <PhotoGallaryModal
          isVisible={isGallaryModalVisible}
          photos={photos}
          onClose={onPhotoGallaryClose}
          setPhotos={setPhotos}
          onCheckedPhotos={onCheckedPhotos}
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
