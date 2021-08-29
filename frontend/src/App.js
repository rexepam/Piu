import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SignUpSignInStackNavigator from './navigator/SignUpSignInStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SignUpSignInStackNavigator />
    </NavigationContainer>
  );
};

export default App;
