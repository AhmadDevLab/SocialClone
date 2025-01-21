import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComp = ({
  btnText = 'Default Value',
  onClick = () => {},
  btnStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.btnStyle, ...btnStyle}}
      onPress={onClick}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'green',
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  },
});
