import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import HeaderSearchInputWhite from '../../components/input/headerSearchInputWhite';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// remove PROVIDER_GOOGLE import if not using Google Maps

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
  const [index, setIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const {width, height} = Dimensions.get('window');
  const CARD_HEIGHT = height / 4;
  const CARD_WIDTH = CARD_HEIGHT - 50;

  const [location, setLocation] = useState({
    latitude: 37.392018,
    longitude: 127.090389,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  const Images = [
    {uri: 'https://i.imgur.com/sNam9iJ.jpg'},
    {uri: 'https://i.imgur.com/N7rlQYt.jpg'},
    {uri: 'https://i.imgur.com/UDrH0wm.jpg'},
    {uri: 'https://i.imgur.com/Ka8kNST.jpg'},
  ];
  const [marks, setMarks] = useState([
    {
      coordinate: {latitude: 37.0, longitude: -122.0},
      title: 'hi 100',
      description: 'description 100',
      image: Images[0],
    },
    {
      coordinate: {latitude: 38, longitude: -122.08395287867834},
      title: 'hi 2',
      description: 'description 2',
      image: Images[1],
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 3',
      description: 'description 3',
      image: Images[2],
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 4',
      description: 'description 4',
      image: Images[3],
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 5',
      description: 'description 5',
      image: Images[4],
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 6',
      description: 'description 6',
      image: Images[5],
    },
  ]);

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

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
        }}>
        {marks.map((item, key) => (
          <Marker
            coordinate={item.coordinate}
            key={key}
            title={item.title}
            description={item.description}>
            <Animated.View style={[styles.markerWrap]}>
              <Animated.View style={[styles.ring]} />
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
            </Animated.View>
          </Marker>
        ))}
      </MapView>
      <View style={styles.search}>
        <HeaderSearchInputWhite placeholder={'Search'} />
      </View>
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled
        snapToInterval={CARD_WIDTH}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {marks.map((item, imageIndex) => (
          <View key={imageIndex} style={styles.card}>
            <ImageBackground source={item.image} style={styles.card} />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {item.title}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
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
    width: 46,
    height: 46,
    borderRadius: 75,
    backgroundColor: '#B3B2FF',
    fontSize: 16,
    opacity: 0.7,
  },
  search: {
    flex: 2,
  },
  ScrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    width: 150,
    height: 200,
    marginBottom: 220,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
});

export default community;
