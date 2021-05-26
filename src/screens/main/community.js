import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import HeaderSearchInputWhite from '../../components/input/headerSearchInputWhite';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ProfileTitle from '../../components/text/profileTitle';
import ButtonAdd from '../../components/buttons/buttonAdd';
// remove PROVIDER_GOOGLE import if not using Google Maps
/*  */
const {width, height} = Dimensions.get('window');

/* 현재 위치 함수 */
const hasLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message: '현재 위치를 기반으로 시작하고자 합니다. ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return PermissionsAndroid.RESULTS.GRANTED;
      } else {
        console.log('location permission denied');
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const community = ({navigation}) => {
  const [markedList, setMarkedList] = useState([]);
  const [location, setLocation] = useState({
    latitude: 37.392018,
    longitude: 127.090389,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const [scrollStatus, setScrollStatus] = useState({
    isOpen: false,
    itemCount: 0,
  });
  const scrollY = useRef(new Animated.Value(height / 2.3)).current;

  const Images = [
    {uri: 'https://i.imgur.com/sNam9iJ.jpg'},
    {uri: 'https://i.imgur.com/N7rlQYt.jpg'},
    {uri: 'https://i.imgur.com/UDrH0wm.jpg'},
    {uri: 'https://i.imgur.com/Ka8kNST.jpg'},
  ];
  const [marks, setMarks] = useState([
    {
      index: 0,
      coordinate: {latitude: 37.0, longitude: -122.0},
      title: 'hi 100',
      description: 'description 100',
      image: Images[0],
    },
    {
      index: 1,
      coordinate: {latitude: 38, longitude: -122.08395287867834},
      title: 'hi 2',
      description: 'description 2',
      image: Images[1],
    },
    {
      index: 2,
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 3',
      description: 'description 3',
      image: Images[2],
    },
    {
      index: 3,
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 4',
      description: 'description 4',
      image: Images[3],
    },
    {
      index: 4,
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 5',
      description: 'description 5',
      image: Images[4],
    },
    {
      index: 5,
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 6',
      description: 'description 6',
      image: Images[5],
    },
    {
      index: 6,
      coordinate: {latitude: 37.3939, longitude: 127.1172},
      title: 'hi 7',
      description: 'description 7',
      image: Images[5],
    },
    {
      index: 7,
      coordinate: {latitude: 37.3983623777127, longitude: 127.11751651604328},
      title: 'hi 8',
      description: 'description 8',
      image: Images[5],
    },
    {
      index: 8,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 9,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 10,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 11,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 12,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 13,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 14,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 15,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      index: 16,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 17,
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 18,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 19,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 20,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 21,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 23,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      index: 24,
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 090909090909',
      description: 'description 9',
      image: Images[5],
    },
  ]);

  /* image mapped with marking place */

  /** map position setting */
  useEffect(() => {
    hasLocationPermission().then(result => {
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              ...location,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            showLocationDialog: true,
            timeout: 3600,
            maximumAge: 10000,
          },
        );
      }
    });
  }, []);

  const onRegionChangeComplete = region => {
    console.log(region);
  };

  const onPressMark = item => {
    let filteredMarks = marks.filter(e => {
      return (
        e.coordinate.latitude === item.latitude &&
        e.coordinate.longitude === item.longitude
      );
    });
    setMarkedList(filteredMarks);
    setLocation({
      ...location,
      latitude: item.latitude,
      longitude: item.longitude,
    });
    setScrollStatus({...scrollStatus, itemCount: filteredMarks.length});
  };
  const onPressScroll = () => {
    console.log(height);
    if (scrollStatus.isOpen) {
      Animated.spring(scrollY, {
        toValue: height / 2.3,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scrollY, {
        toValue: 0,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }
    setScrollStatus({...scrollStatus, isOpen: !scrollStatus.isOpen});
  };

  return (
    <View style={styles.container}>
      <MapView
        // ref={map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onRegionChangeComplete={onRegionChangeComplete}
        region={location}>
        {marks.map((item, index) => {
          return (
            <Marker
              coordinate={item.coordinate}
              key={index}
              onPress={event => {
                console.log(event);
                onPressMark(item.coordinate);
              }}>
              <View style={styles.markerWrap}>
                <View style={[styles.ring]} />
                <Text style={styles.marks}>
                  {
                    marks.filter(e => {
                      return (
                        e.coordinate.latitude === item.coordinate.latitude &&
                        e.coordinate.longitude === item.coordinate.longitude
                      );
                    }).length
                  }
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.search}>
        <HeaderSearchInputWhite placeholder={'Search'} />
        <ButtonAdd onDone={() => navigation.navigate('CommunityAdd')} />
      </View>
      <Animated.ScrollView
        style={[
          styles.bottomPopupMenu,
          {backgroundColor: 'white'},
          {transform: [{translateY: scrollY}]},
        ]}>
        <TouchableOpacity
          style={{alignSelf: 'center', height: 40}}
          onPress={onPressScroll}>
          <ProfileTitle text={`목록: ${scrollStatus.itemCount} `} />
        </TouchableOpacity>
        {markedList.map((markItem, key) => {
          if (markItem !== undefined) {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  padding: 10,
                }}
                key={key}>
                <Image
                  source={require('../../assets/images/icon/location.png')}
                />
                <ProfileTitle text={`${key} - ${markItem.title}`} />
              </TouchableOpacity>
            );
          }
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {},
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: height + 48,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marks: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 45,
    height: 45,
    borderRadius: 75,
    backgroundColor: '#B3B2FF',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.7,
  },
  search: {
    flex: 1,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    width: 30,
    height: 30,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
  },
  bottomPopupMenu: {
    flex: 1,
    backgroundColor: 'white',
    width: 375,
    marginBottom: 129,
    paddingBottom: 100,
    borderRadius: 22,
  },
});

export default community;
