import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Comments from './comments';

export default function App() {

  const { Navigator, Screen } = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen
          name='Home'
          component={Home}
        />
        <Screen
          name='Comments'
          component={Comments}
        />
      </Navigator>
    </NavigationContainer>
  );
}