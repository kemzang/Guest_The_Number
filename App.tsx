/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';


import MyComponent from './components/screenSign';
import SignScreen from './components/SignScreen';
import ScreeLoadign from './components/ScreenLoding';
import ScreeToBegin from "./components/ScreenToBegin";
import ScreenChoice from './components/ScreenChoice';
import ScreenLoby from './components/ScreenLoby';

// Créer le stack navigator
const Stack = createStackNavigator();

// Définir les composants pour les écrans


// Configurer la navigation
function App() {

  const isa = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Page_si_Pas_de_connexion" component={isa ? MyComponent : ScreeToBegin} />
        <Stack.Screen name="Page_Inscription_connexion" component={SignScreen} />
        <Stack.Screen name="Page_de_chargement" component={ScreeLoadign} />
        <Stack.Screen name="Page_de_choix_de_jeu" component={ScreenChoice} />
        <Stack.Screen name='Loby' component={ScreenLoby}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
