import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUpSignInForm from '../../component/SignUpSignInForm';
import BackButton from '../../common/BackButton';
import styles from '../SignUpPage/style';

const SignInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <SignUpSignInForm action={'signin'} />
    </View>
  );
};

export default SignInPage;
