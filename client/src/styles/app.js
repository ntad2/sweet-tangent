// Styles for the entire app
import { DefaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

// This theme will propagate to react-native-paper components
export const paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'purple',
    accent: 'yellow',
  },
};

export const mainStyles = StyleSheet.create({
  container: {
    marginTop: 300,
    //flex: 1,
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
  },
  navWrap: {
    marginTop: 5,
    padding: 5,
    width: '100%',
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    color: "blue",
  },
  subNavItem: {
    padding: 5
  },
  header: {
    fontSize: 20,
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
