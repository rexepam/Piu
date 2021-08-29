import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../../page/WelcomePage';
import SelectLocationPage from '../../page/SelectLocationPage';
import SignUpPage from '../../page/SignUpPage';
import SignInPage from '../../page/SignInPage';

const SignUpSignInStack = createStackNavigator();

const SignUpSignInStackNavigator = () => {
  return (
    <SignUpSignInStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <SignUpSignInStack.Screen name="Welcome" component={WelcomePage} />
      <SignUpSignInStack.Screen name="SelectionLocation" component={SelectLocationPage} />
      <SignUpSignInStack.Screen name="SignUp" component={SignUpPage} />
      <SignUpSignInStack.Screen name="SignIn" component={SignInPage} />
    </SignUpSignInStack.Navigator>
  );
};

export default SignUpSignInStackNavigator;
