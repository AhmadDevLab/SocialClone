import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const TextInputComp = ({
  value = '',
  placeholder = '',
  inputStyle = {},
  onChangeText = () => {},
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={{...styles.inputStyle, ...inputStyle}}
    />
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#bbb',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
