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
import ButtonComp from '../Components/ButtonComp';
import TextInputComp from '../Components/TextInputComp';
import color from '../styles/color';

const HomeScreen = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contanier}>
        <TextInputComp
          placeholder="Enter Name"
          value={name}
          onChangeText={val => setName(val)}
        />
        <TextInputComp
          placeholder="Enter Email"
          inputStyle={{
            backgroundColor: color.themeColor,
            marginTop: 10,
            borderRadius: 0,
          }}
        />

        <ButtonComp btnText="Done" onClick={() => alert(name)} />

        <ButtonComp
          btnText="Save"
          onClick={() => alert(name)}
          btnStyle={{backgroundColor: 'red'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 20,
  },
});
