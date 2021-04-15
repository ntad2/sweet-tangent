import React from 'react';

import { StyleSheet, SafeAreaView, AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';

import Main from './src/page/main';

export default function App() {
  // COMMENT OUT ALL console.log statements IN PRODUCTION
  console.log("App executed");
  let x = 1;          // testing: try setting a break point here

  // testing: create a bug
    // let x;
    // x.toString();

  return (
    <PaperProvider theme={theme}>
        <Main/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);

// This theme applies to react-native-paper components only
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',  
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
