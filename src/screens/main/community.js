import React from 'react';
import {useState, useEffect} from 'react';
import {
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
// remove PROVIDER_GOOGLE import if not using Google Maps
/*  */
const {width, height} = Dimensions.get('window');
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

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
  const [markedList, setMarkedList] = useState([{}]);
  const [location, setLocation] = useState({
    latitude: 37.392018,
    longitude: 127.090389,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const [markViewY, setMarkViewY] = useState(1);

  // const checkMark = useCallback(() => {
  //   markRef.current();
  // }, []);

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
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',

      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},

      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },

    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',

      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
      image: Images[5],
    },
    {
      coordinate: {latitude: 37.550582, longitude: 127.001091},
      title: 'hi 9',
      description: 'description 9',
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

  const onRegionChangeComplete = region => {
    console.log('---------- region changed --------');
    // setLocation(region);
    console.log(region);
  };

  const onPressMark = item => {
    setMarkedList(
      marks.filter(e => {
        return (
          e.coordinate.latitude === item.latitude &&
          e.coordinate.longitude === item.longitude
        );
      }),
    );
    setLocation({
      ...location,
      latitude: item.latitude,
      longitude: item.longitude,
    });
    setMarkViewY(300);
  };

  return (
    <View style={styles.container}>
      <MapView
        // ref={map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onRegionChangeComplete={onRegionChangeComplete}
        region={location}>
        {marks.map((item, key) => {
          return (
            <Marker
              // ref={markRef}
              coordinate={item.coordinate}
              key={key}
              onPress={() => onPressMark(item.coordinate)}>
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
      </View>
      <Animated.ScrollView
        style={{
          backgroundColor: 'orange',
          width: width - 20,
          alignSelf: 'center',
          height: markViewY,
        }}>
        <Text>list</Text>
        {markedList.map((markItem, key) => {
          return (
            <TouchableOpacity key={key}>
              <Text>{markItem.title}</Text>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flex: 2,
  },
  scrollView: {
    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
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
  calloutButton: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 1400,
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  bubble: {
    flex: 1,
    width: 1400,

    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  sheet: {
    position: 'absolute',
    top: Dimensions.get('window').height,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: 'orange',
    width: width - 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default community;
