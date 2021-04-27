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

// These will be our standard font sizes
export const textStyles = StyleSheet.create({
  sm: {
    fontSize: 10,
  },
});
export const alignStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
export const stylesMobile = StyleSheet.create({
  frameMargin: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
  pageWrap: {
    marginTop: 300,
    alignItems: 'center',
  },
});
export const stylesWeb = StyleSheet.create({
  frameMargin: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  pageWrap: {
    marginTop: 100,
    alignItems: 'center',
  },
});



export const mainStyles = StyleSheet.create({
  container: {
    marginTop: 300,
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navWrap: {
    marginTop: 10,
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
  },
  bigText: {
    fontWeight: '900',
    fontSize: 24
  },
  mobile: {
    fontStyle: 'italic'
  },
});
