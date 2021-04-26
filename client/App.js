import React from 'react';

import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

import MainMobile from './src/mobile/main';
import MainWeb from './src/web/main';
import { paperTheme } from './src/styles/app';

export default function App() {
  // note: this must go inside the body of a function component. Top level.
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"  
  });

  function Body() {
    if (isTabletOrMobileDevice) {
      // note: don't use react-router-native bc it will crash the web build
      return <MainMobile/>
    }
    // use react-router (for web) for page like navigation
    return <MainWeb/>
  }

  return (
    <PaperProvider theme={paperTheme}>
      <Body/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);
