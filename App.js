import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  const [data , setData] = useState([0,1,2,3,4,5,6,7,8,9,10])
  return (
    <View style={{flex:1}}>
      {
        data.map((val, i) => {
          return <Text key={String(i)}>Value on index { i} is {val}</Text>
        })
      }
    </View>
  );
};

export default App;



