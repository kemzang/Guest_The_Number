/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ImageBackground
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import MyComponent from './components/screenSign';
import SignScreen from './components/SignScreen';
import ScreeLoadign from './components/ScreenLoding';
import ScreeToBegin from "./components/ScreenToBegin";
import ScreenChoice from './components/ScreenChoice';
function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={{ flex: 1 }} >
      {/* <MyComponent /> */}
      <ScreenChoice />

    </View>
  );
}

export default App;
