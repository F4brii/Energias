// App.js

//Stores
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import Index from './src/index';

//browser
const Stack = createStackNavigator();

//navigation function
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculadora de cables"
          component={Index}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;