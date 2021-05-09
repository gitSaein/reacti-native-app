import React, {useState, useEffect, createRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import HeaderSearchInputWhite from '../../components/input/headerSearchInputWhite';

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
// remove PROVIDER_GOOGLE import if not using Google Maps
/*  */
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width * 0.8;

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
  const animation = new Animated.Value(0);
  const map = createRef(null);
  const [scrollX, setScrollX] = useState(0);

  const [location, setLocation] = useState({
    latitude: 37.392018,
    longitude: 127.090389,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
  console.log('======== START ++++++++++++');
  console.log(SPACING_FOR_CARD_INSET);

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
    {
      coordinate: {latitude: 37.3939, longitude: 127.1172},
      title: 'hi 7',
      description: 'description 7',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.3983623777127, longitude: 127.11751651604328},
      title: 'hi 8',
      description: 'description 8',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
  ]);

  /* image mapped with marking place */

  /** map position setting */
  useEffect(() => {
    console.log('########### 1 ###########');
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

  /** image  */
  useEffect(() => {
    console.log('scroll render');
    console.log(scrollX);
  }, [scrollX]);

  const handleScroll = useCallback(event => {
    setScrollX(
      Math.floor(
        event.nativeEvent.contentOffset.x / (Math.floor(CARD_WIDTH) + 10),
      ),
    );
    console.log('----------------scrollX + ' + scrollX);
    console.log(marks[scrollX].coordinate);
    setLocation({
      ...location,
      latitude: marks[scrollX].coordinate.latitude,
      longitude: marks[scrollX].coordinate.longitude,
    });

    return Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: animation,
            },
          },
        },
      ],
      {useNativeDriver: true},
    );
  });

  const onChanged = region => {
    console.log(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onRegionChange={onChanged}
        region={location}>
        {marks.map((item, key) => {
          console.log(key);
          return (
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
          );
        })}
      </MapView>
      <View style={styles.search}>
        <HeaderSearchInputWhite placeholder={'Search'} />
      </View>
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={CARD_WIDTH + 10}
        scrollEventThrottle={1}
        onMomentumScrollEnd={handleScroll}
        contentContainerStyle={{
          // contentInset alternative for Android
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
        }}>
        {marks.map((mark, imageIndex) => (
          <View key={imageIndex} style={styles.card}>
            <Image
              source={mark.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {mark.title}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {mark.description}
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
  endPadding: {},
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
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
