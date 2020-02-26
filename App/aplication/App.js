// App.js

//Stores
import * as React from 'react';
import { Text, View,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import Index from './src/index';

//browser
const Stack = createStackNavigator();

//navigation function
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Calculadora de cables" 
          component={Index} 
          options={
            { 
              title: <Text style={{fontSize: 20, color: '#fff'}}>Calculadora de cables</Text>,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;