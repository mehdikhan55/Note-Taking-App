import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'> 
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>helo</Text>
    //   <Login />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
