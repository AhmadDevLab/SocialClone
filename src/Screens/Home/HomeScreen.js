import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation, route}) => {
  
  
  const data = route.params.data;
 
  return (
    <View style={styles.container}>
      <Text>{data.channel_name}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
