// App.js

//Stores
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import calculator from './src/screen/calculator';
import index from './src/index'
import demanda from './src/screen/damanda'

//browser
const Stack = createStackNavigator();

//navigation function
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen
          name="Index"
          component={index}
          options={
            {
              title: "Menú",
              headerStyle: {
                backgroundColor: '#000962',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: '#fff'
              },
            }
          }
        />
        <Stack.Screen
          name="Calculadora"
          component={calculator}
          options={
            {
              title: 'Calculadora de cables',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#000962',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: '#fff'
              },
            }
          }
        />
        <Stack.Screen
          name="Bombillas"
          component={demanda}
          options={
            {
              title: 'Demanda máxima',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#000962',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: '#fff'
              },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;