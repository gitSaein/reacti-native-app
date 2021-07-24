import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

const tabFeedView = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.rowView}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('../../../assets/images/temp/tmp1.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../../assets/images/temp/tmp2.png')}
          />
          <Image
            style={styles.image}
            source={require('../../../assets/images/temp/tmp3.png')}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/temp/tmp4.png')}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/temp/tmp4.png')}
          />
        </View>
        <View style={styles.rowView}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/temp/tmp4.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  image: {
    borderRadius: 14,
    margin: 5,
    width: 120,
    height: 120,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});

export default tabFeedView;
