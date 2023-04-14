import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cardapio from './screens/Cardapio';
import Favoritos from './screens/Favoritos';
import Perfil from './screens/Perfil';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Cardapio" component={Cardapio} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

