import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../common/BackButton';
import SignUpSignInForm from '../../component/SignUpSignInForm';
import styles from './style';

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <SignUpSignInForm action={'signup'} />
    </View>
  );
};

export default SignUpPage;
