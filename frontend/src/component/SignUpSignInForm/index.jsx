import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import Input from '../../common/Input';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const SignUpSignInForm = props => {
  const { action } = props;
  const initForm = {
    username: '',
    email: '',
    password: '',
  };
  const thirdParties = ['Google', 'Facebook', 'WeChat'];
  const [submitError, setSubmitError] = useState('');
  const navigation = useNavigation();

  const handleLinkAction = () => {
    if (action === 'signup') {
      navigation.navigate('SignIn');
    }
    if (action === 'signin') {
      navigation.navigate('SignUp');
    }
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.signInSignUpFormContainer}>
      <Formik initialValues={initForm} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            {action === 'signup' && (
              <Input
                title={'Please enter the username:'}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />
            )}
            <Input
              title={'Please enter the email address:'}
              value={values.email}
              type="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <Input
              title={'Please enter the password:'}
              value={values.password}
              type="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>{action === 'signin' ? 'Sign In' : 'Sign Up'}</Text>
            </TouchableOpacity>
            <View>
              <Text>{submitError}</Text>
            </View>
            <TouchableOpacity style={styles.linkContainer} onPress={handleLinkAction}>
              <Text style={styles.linkText}>
                {action === 'signin'
                  ? "Don't have an account? Sign Up"
                  : 'Aleady have an account? Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {thirdParties.map(thirdParty => (
        <TouchableOpacity key={thirdParty} style={styles.thirdParty} onPress={handleSubmit}>
          <Text style={styles.thirdPartyText}>{`${
            action === 'signin' ? 'Sign In' : 'Sign Up'
          } with ${thirdParty}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SignUpSignInForm;
