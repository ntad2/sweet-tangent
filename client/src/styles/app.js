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

export const commonStyles = StyleSheet.create({
  frameTitle: {
    alignItems: 'center',
    fontSize: 10,
  },
});  
export const stylesMobile = StyleSheet.create({
  frameMargin: {
    margin: 5,
  },
  pageWrap: {
    marginTop: 20,
    alignItems: 'center',
  },
  blogTitle: {
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '700',
  },
});
export const stylesWeb = StyleSheet.create({
  frameMargin: {
    margin: 10,
  },
  pageWrap: {
    marginTop: 100,
    alignItems: 'center',
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: '900',
  },
});
