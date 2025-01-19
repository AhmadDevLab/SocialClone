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
import ButtonComp from './src/Components/ButtonComp';

const App = () => {
  const [name, setName] = useState('Code Builder');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contanier}>
        <TextInput
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Enter name"
          style={styles.inputStyle}
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

export default App;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 20,
  },
  inputStyle: {
    backgroundColor: '#bbb',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
