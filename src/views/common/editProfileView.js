import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileImage from '../../components/image/smallMediumCirCleDotFrame';
import HorizontalTitleEdit from '../../components/common/horizontalTitleEdit';
import HorizontalTitleSelect from '../../components/common/horizontalTitleSelect';
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

  const onChangeValue = value => {
    onChangeUserInfo(prevState => ({
      ...prevState,
      nationalNo: value,
    }));
  };
  const onChangeGenderValue = value => {
    onChangeUserInfo(prevState => ({
      ...prevState,
      gender: value,
    }));
  };

  const nationalList = [
    {
      label: 'Korea (+82)',
      value: 82,
    },
    {
      label: 'Japan (+81)',
      value: 81,
    },
    {
      label: 'Vietnam (+84)',
      value: 84,
    },
    {
      label: 'China (+86)',
      value: 86,
    },
  ];

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
      <View style={{flex: 7}}>
        <HorizontalTitleEdit
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
        <HorizontalTitleEdit
          index={1}
          title={'email'}
          value={userInfo.email}
          onChangeText={value =>
            onChangeUserInfo(prevState => ({
              ...prevState,
              email: value,
            }))
          }
        />
        <HorizontalTitleSelect
          index={2}
          title={'nation'}
          items={nationalList}
          value={userInfo.nationalNo}
          onChangeValue={onChangeValue}
        />
        <HorizontalTitleEdit
          index={3}
          title={'phone'}
          value={userInfo.phone}
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
