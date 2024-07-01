import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import Euro from './src/Euro';
import Dolar from './src/Dolar';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Euro" component={Euro}/>
        <Stack.Screen name="Dolar" component={Dolar}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}