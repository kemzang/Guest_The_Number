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
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';



import MyComponent from './components/screenSign';
import SignScreen from './components/SignScreen';
import ScreeLoadign from './components/ScreenLoding';
import ScreeToBegin from "./components/ScreenToBegin";
import ScreenChoice from './components/ScreenChoice';
import ScreenLoby from './components/ScreenLoby';

// Créer le stack navigator
const Stack = createStackNavigator();
interface user {
  email: String,
  Name: String
}
// Définir les composants pour les écrans


function VerifAuthentification(): Boolean {

  const [verdict,setVerd]  = React.useState(true);
  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User email: ', user.email);
        setVerd(false);
        // L'utilisateur est connecté, vous pouvez ici charger des données spécifiques à l'utilisateur
      } else {
        console.log('No user is signed in.');
        // L'utilisateur n'est pas connecté, vous pouvez rediriger vers la page de connexion
        setVerd(true);
      }
    });

    // Retournez une fonction de nettoyage pour annuler l'abonnement lorsque le composant est démonté
    return unsubscribe;
  }, []);

  // Le reste de votre composant

  return  verdict;

}
// Configurer la navigation
function App() {

  var isa: Boolean = VerifAuthentification();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Page_si_Pas_de_connexion" component={isa ? MyComponent : ScreeToBegin} />
        <Stack.Screen name="Page_Inscription_connexion" component={SignScreen} />
        <Stack.Screen name="Page_de_chargement" component={ScreeLoadign} />
        <Stack.Screen name="Page_de_choix_de_jeu" component={ScreenChoice} />
        <Stack.Screen name='Loby' component={ScreenLoby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
