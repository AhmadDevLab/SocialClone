import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import HomeScreen from '../Screens/Home/HomeScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName={navigationStrings.LOGIN} screenOptions={{
          headerShown:false
      }}>
        <Stack.Screen name={navigationStrings.LOGIN} component={LoginScreen} />
        <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
