import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempSpace: {
    marginTop: 300,
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
