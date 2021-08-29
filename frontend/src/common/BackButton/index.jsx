import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../page/SelectLocationPage/style';

const BackButton = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.backButtonContainer}>
        <Icon name="arrow-left" size={30} color="#181725" />
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
