import React from 'react';
import { View, Text, Picker, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../../common/BackButton';
import styles from './style';

const DonorPage = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('../../public/donorPageHeader.png')} />
      </View>
    </View>
  );
};

export default DonorPage;
