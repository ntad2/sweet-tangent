import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { expo } from './app.json';

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

export default function App() {
  // COMMENT OUT ALL console.log statements IN PRODUCTION
  console.log("App executed");
  let x = 1;

  // testing: create a bug
    // let x;
    // x.toString();

  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"  
  });

  // this is a responsive component
  function Greeting() {
    if (isTabletOrMobileDevice) {
      return <Text>Hello Mobile Users 👋</Text>
    } else {
      return <Text style={styles.bigText}>👋 Hello Desktop People</Text>
    }
  }

  // this is responsive styles
  function MediaStyle() {
    if (isTabletOrMobileDevice) {
      return styles.mobile
    } else {
      return styles.bigText
    }
  }
  
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
      <Greeting />
        <StatusBar style="auto" />
        <View>
          <Button icon="camera">
            Press me
          </Button>
        </View>
        <Text style={MediaStyle()}> Hello World</Text>
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);

// Not sure if this theme is working
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',  
    text: 'purple',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontWeight: '900',
    fontSize: 24
  },
  mobile: {
    fontStyle: 'italic'
  }
});
