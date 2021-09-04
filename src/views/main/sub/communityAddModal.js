import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import HeaderWhiteWithComponent from '../../../components/header/headerWhiteWithComponent';
import PhotoGallaryModal from '../../../components/modal/photoGallaryModal';
import ButtonBigAdd from '../../../components/buttons/buttonBigAdd';
import SelectBoxWithSearch from '../../../components/input/selectBoxWithSearch';
import ChipsWithClose from '../../../components/chip/chipsWithClose';
import CameraRoll from '@react-native-community/cameraroll';

const {height, width} = Dimensions.get('window');

const communityAddModal = ({isOpen, setIsOpen, saveContent}) => {
  const [isGallaryModalVisible, setIsGallaryModalVisible] = useState(false);
  const [contents, setContents] = useState({
    coordinate: {latitude: 37.550582, longitude: 127.001091},
    title: '',
    content: '',
    photo: [],
    category: [],
  });
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState([
    {label: '부동산', value: 1, select: false},
    {label: '아르바이트', value: 2, select: false},
    {label: '중고매매', value: 3, select: false},
    {label: '부탁', value: 4, select: false},
  ]);
  const updateCategory = selectedIdx => {
    setCategory(
      category.map(item =>
        item.value === selectedIdx ? {...item, select: !item.select} : item,
      ),
    );
    console.log(category);
  };
  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 10,
    })
      .then(r => {
        setPhotos(r.edges);
      })
      .catch(e => {
        console.error('getPhotos', e);
      });
  };
  useEffect(() => {
    console.log('category - - - - ');
    setContents({
      ...contents,
      category: category.filter(item => item.select === true),
    });
  }, [category]);

  const openGallaryModal = photo => {
    getPhotos();
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };
  const onCheckedPhotos = () => {
    setContents({
      ...contents,
      photo: contents.photo.concat(
        photos.filter(
          photo => photo.isCheck && Object.keys(photo).includes('isCheck'),
        ),
      ),
    });
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };
  const onPhotoGallaryClose = () => {
    setIsGallaryModalVisible(!isGallaryModalVisible);
  };

  return (
    <Modal
      isVisible={isOpen}
      hasBackdrop={true}
      coverScreen={false}
      style={styles.container}>
      <HeaderWhiteWithComponent
        title={'Create Post'}
        onClose={() => setIsOpen(false)}
        onNext={() => {
          saveContent(contents);
          setContents({
            coordinate: {latitude: 37.550582, longitude: 127.001091},
            title: '',
            content: '',
            photo: [],
            category: [],
          });
          setCategory([
            {label: '부동산', value: 1, select: false},
            {label: '아르바이트', value: 2, select: false},
            {label: '중고매매', value: 3, select: false},
            {label: '부탁', value: 4, select: false},
          ]);
        }}
      />
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

      <ChipsWithClose
        items={category.filter(e => e.select === true)}
        onPress={e => updateCategory(e)}
      />
      <SelectBoxWithSearch setItems={e => updateCategory(e)} items={category} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 10,
          alignItems: 'flex-start',
        }}>
        <ScrollView horizontal>
          {contents.photo.map((photo, index) => {
            if (Object.keys(photo).includes('isCheck') && photo.isCheck) {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setContents({
                      ...contents,
                      photo: contents.photo.filter((p, idx) => idx !== index),
                    });
                  }}>
                  <ImageBackground
                    key={index}
                    style={{
                      width: 90,
                      height: 90,
                      margin: 5,
                      borderRadius: 14,
                    }}
                    source={{uri: photo.node.image.uri}}>
                    <Image
                      key={index}
                      style={{margin: 2}}
                      source={require('../../../assets/images/icon/close.png')}
                    />
                  </ImageBackground>
                </TouchableOpacity>
              );
            }
          })}
          <ButtonBigAdd onPress={openGallaryModal} />
        </ScrollView>
      </View>
      <PhotoGallaryModal
        isVisible={isGallaryModalVisible}
        photos={photos}
        onClose={onPhotoGallaryClose}
        setPhotos={setPhotos}
        onCheckedPhotos={onCheckedPhotos}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignSelf: 'center',

    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  textTitle: {
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    margin: 10,
    fontWeight: 'bold',
    width: '90%',
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#F9F9F9',
    margin: 10,
    width: '90%',
    height: Math.max(35, height / 5),
  },
});

export default communityAddModal;
