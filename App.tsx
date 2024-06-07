/* eslint-disable prettier/prettier */
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

import MyComponent  from './components/screenSign';
import SignScreen from './components/SignScreen';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={{flex:1}} >
     {/* <MyComponent /> */}
     <SignScreen />
    
      </View>
  );
}

export default App;
