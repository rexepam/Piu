import React from 'react';
import { View, Text, Picker, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../common/BackButton';
import styles from './style';

const SelectLocationPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { role } = route.params;

  return (
    <View style={styles.rootContainer}>
      <BackButton onPress={() => navigation.navigate('Welcome')} />
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('../../public/selectLocation.png')} />
        <Text style={styles.headerTitle}>Select Your Location</Text>
        <Text style={styles.headerSubTitle}>
          Turn on your location to stay informed of updates in your area
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Text>Region</Text>
        <Picker selectedValue={'sh-zh'} style={styles.locationItem}>
          <Picker.Item label="Shanghai, China" value="sh-zh" />
        </Picker>
        <Text>Community</Text>
        <Picker selectedValue={'huangpuDistrict'} style={styles.locationItem}>
          <Picker.Item label="Huangpu District" value="huangpuDistrict" />
        </Picker>
      </View>
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('SignUp', { role })}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectLocationPage;
