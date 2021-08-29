import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const Input = ({
  title,
  value,
  type,
  placeholder,
  multiline = false,
  keyboardType = 'default',
  errorMessage,
  onBlur,
  onChangeText,
}) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      keyboardType={keyboardType}
      secureTextEntry={type === 'password'}
      onBlur={onBlur}
      onChangeText={onChangeText}
    />
    {errorMessage && <Text>{errorMessage}</Text>}
  </View>
);

export default Input;
