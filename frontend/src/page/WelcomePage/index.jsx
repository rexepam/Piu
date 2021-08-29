import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const WelcomePage = () => {
  const roles = ['donor', 'donee'];

  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('../../public/logoWhite.png')} />
        <Text style={styles.logoText}>Piu</Text>
      </View>
      <View>
        {roles.map(role => (
          <View style={styles.roleContainer} key={role}>
            <Text style={styles.roleText}>Sign up or sign in as a {role}</Text>
            <TouchableOpacity
              style={styles.roleButton}
              onPress={() => navigation.navigate('SelectionLocation', { role })}
            >
              <Text style={styles.roleButtonText}>
                {role === 'donor' ? 'I have something to share' : 'I need some help'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WelcomePage;
