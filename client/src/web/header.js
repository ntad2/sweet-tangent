import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavLink } from "react-router-dom";

export default function HeaderWeb() {
  return (
    <View style={styles.container3}>
    <nav>
      <NavLink exact activeClassName="active" to="/">
        <Text style={styles.navItem}>Home</Text>
      </NavLink>
      <NavLink activeClassName="active" to="/people">
        <Text style={styles.navItem}>People</Text>
      </NavLink>
      <NavLink activeClassName="active" to="/tangents">
      <Text style={styles.navItem}>Tangents</Text>
      </NavLink>
    </nav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
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
  container2: {
    marginTop: 25,
    padding: 10,
    width: '100%',
  },
  container3: {
    marginTop: 25,
    padding: 10,
    width: '100%',
    textAlign: 'right'
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    color: "blue",
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
