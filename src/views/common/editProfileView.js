import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ProfileImage from '../../components/image/smallMediumCirCleDotFrame';
import HorizontalTitleEdit from '../../components/common/horizontalTitleEdit';
import HorizontalTitleSelect from '../../components/common/horizontalTitleSelect';
import HorizontalTitleEditButton from '../../components/common/horizontalTitleEditButton';

import Header from '../../components/header/headerPurpleLeftDone';

const editProfileView = ({route}) => {
  const navigation = useNavigation();

  const [userInfo, onChangeUserInfo] = useState({
    name: 'hi1',
    email: 'hi@gmail.com',
    nationalNo: 82,
    phone: '01012341234',
    gender: 'f',
  });

  const onChangeGenderValue = value => {
    onChangeUserInfo(prevState => ({
      ...prevState,
      gender: value,
    }));
  };

  const genders = [
    {
      label: 'female',
      value: 0,
    },
    {
      label: 'male',
      value: 1,
    },
    ,
  ];

  return (
    <View style={styles.container}>
      <Header title={'Edit Profile'} onLeft={() => navigation.goBack()} />
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <ProfileImage
            imageUrl={require('../../assets/images/temp/tmp4.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 7, paddingLeft: 20, paddingRight: 20}}>
        <HorizontalTitleEdit
          keyboardType={'number-pad'}
          index={0}
          title={'name'}
          value={userInfo.name}
          onChangeText={value =>
            onChangeUserInfo(prevState => ({
              ...prevState,
              name: value,
            }))
          }
        />
        <HorizontalTitleEditButton
          keyboardType={'numeric'}
          index={3}
          editable={false}
          title={'phone'}
          value={'+' + userInfo.nationalNo + ' ' + userInfo.phone}
          buttonTitle={'수정하기'}
          onPress={() => navigation.navigate('SmsPhoneNumber')}
          onChangeText={value =>
            onChangeUserInfo(prevState => ({
              ...prevState,
              phone: value,
            }))
          }
        />
        <HorizontalTitleSelect
          index={4}
          title={'gender'}
          items={genders}
          value={userInfo.nationalNo}
          onChangeValue={onChangeGenderValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  input: {
    height: 17,
    margin: 12,
    padding: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.71,
    color: '#6F8BA4',
  },
});

export default editProfileView;
