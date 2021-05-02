import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

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
  const [location, setLocation] = useState();
  const [marks, setMarks] = useState([
    {
      coordinate: {latitude: 37.0, longitude: -122.0},
      title: 'hi 100',
      description: 'description 100',
    },
    {
      coordinate: {latitude: 38, longitude: -122.08395287867834},
      title: 'hi 2',
      description: 'description 2',
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 3',
      description: 'description 3',
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 4',
      description: 'description 4',
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 5',
      description: 'description 5',
    },
    {
      coordinate: {latitude: 37.42342342342342, longitude: -122.08395287867832},
      title: 'hi 6',
      description: 'description 6',
    },
  ]);

  useEffect(() => {
    hasLocationPermission().then(result => {
      console.log(result);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position.coords);
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

  if (!location) {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.392018,
            longitude: 127.090389,
            latitudeDelta: 0.05,
            longitudeDelta: 0.001,
          }}
        />
      </View>
    );
  }
  //https://blog.logrocket.com/react-native-geolocation-a-complete-tutorial/
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 5,
          longitudeDelta: 0.001,
        }}>
        {marks.map((item, key) => (
          <Marker
            coordinate={item.coordinate}
            key={key}
            title={item.title}
            description={item.description}>
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
          </Marker>
        ))}
      </MapView>
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
});

export default community;
