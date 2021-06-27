import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import HeaderSearchInputWhite from '../../components/input/headerSearchInputWhite';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ButtonAdd from '../../components/buttons/buttonAdd';
import BottomHalfModal from '../../components/modal/bottomHalfModal';
import CommunityAddModal from './sub/communityAddModal';
// remove PROVIDER_GOOGLE import if not using Google Maps
/*  */
const {height} = Dimensions.get('window');

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

const community = ({route, navigation}) => {
  const [selectedMarkedList, setSelectedMarkedList] = useState([]);
  const [location, setLocation] = useState({
    latitude: 37.392018,
    longitude: 127.090389,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const [isScrollOpen, setIsScrollOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [marks, setMarks] = useState([]);

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

  const onRegionChangeComplete = region => {};

  const onPressMark = item => {
    setSelectedMarkedList(
      marks.filter(e => {
        return (
          e.coordinate.latitude === item.latitude &&
          e.coordinate.longitude === item.longitude
        );
      }),
    );
    setIsScrollOpen(!isScrollOpen);
    console.log(isScrollOpen);
  };

  const onCloseSelectedItemModal = e => {
    console.log(e);
    setIsScrollOpen(!isScrollOpen);
  };

  const saveContent = content => {
    if (content !== undefined) {
      setMarks(marks.concat(content));
    }
    setIsAddOpen(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        // ref={map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onRegionChangeComplete={onRegionChangeComplete}
        region={location}>
        {marks.map((mark, index) => {
          return (
            <Marker
              key={index}
              coordinate={mark.coordinate}
              onPress={() => {
                console.log('----- ----- -----');
                onPressMark(mark.coordinate);
              }}
              onSelect={() => {
                console.log('----- ----- -----');
                onPressMark(mark.coordinate);
              }}>
              <View style={styles.markerWrap}>
                <View style={[styles.ring]} />
                <Text style={styles.marks}>
                  {
                    marks.filter(e => {
                      return (
                        e.coordinate.latitude === mark.coordinate.latitude &&
                        e.coordinate.longitude === mark.coordinate.longitude
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
        <HeaderSearchInputWhite
          placeholder={'Search'}
          items={selectedMarkedList}
        />
        <ButtonAdd onDone={() => setIsAddOpen(true)} />
      </View>
      <BottomHalfModal
        isOpen={isScrollOpen}
        toggleModal={onCloseSelectedItemModal}
        items={selectedMarkedList}
      />
      <CommunityAddModal
        isOpen={isAddOpen}
        setIsOpen={setIsAddOpen}
        saveContent={saveContent}
      />
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
});

export default community;
