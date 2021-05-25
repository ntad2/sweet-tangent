import { StyleSheet } from 'react-native';

// specific styles for the main page (for mobile and web)
// also for the header and footer
// NOTE: use our common styles whenever possible
export const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navWrap: {
    marginTop: 30,
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

  tempSpace: {
    marginTop: 300,
    width: '100%',
    alignContent: "center",
  },
  header: {
    fontSize: 20,
  },
  
});
