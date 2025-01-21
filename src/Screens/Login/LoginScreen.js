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
import ButtonComp from '../../Components/ButtonComp';
import TextInputComp from '../../Components/TextInputComp';
import color from '../../styles/color';

const LoginScreen = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setconfirmPassword] = useState('');

  const btnLoginPress = () => {
    if (name == '') {
      alert('Enter your name');
      return;
    }
    if (email == '') {
      alert('Enter your email');
      return;
    }
    if (password == '') {
      alert('Enter your password');
      return;
    }
    if (confirmPassword == '') {
      alert('Enter your confirm password');
      return;
    }

    if (password == confirmPassword) {
      alert('Login Successfull');
    } else {
      alert('passwords do not matched');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contanier}>
        <View>
          <Text style={styles.tvLoginHeading}>Login </Text>
          <TextInputComp
            value={name}
            placeholder="Enter your Name"
            onChangeText={val => setName(val)}
          />
          <TextInputComp
            value={email}
            placeholder="Enter your Email"
            onChangeText={val => setEmail(val)}
            keyboardType="email-address"
          />

          <TextInputComp
            value={password}
            placeholder="Enter your password"
            onChangeText={val => setPassword(val)}
          />

          <TextInputComp
            value={confirmPassword}
            placeholder="Enter your confirm password"
            onChangeText={val => setconfirmPassword(val)}
          />
        </View>

        <ButtonComp btnText="Login" onClick={btnLoginPress} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  tvLoginHeading: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
