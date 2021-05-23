import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Home from '../page/home';
import Instance from '../page/instance';

export default function MainWeb() {
  const People = () => <View style={styles.container}><Text style={styles.header}>All People</Text></View>;
  const Tangents = () => <View style={styles.container}><Text style={styles.header}>All Tangents</Text></View>;
  const Notfound = () => <View style={styles.container}><Text style={styles.header}>Not Found</Text></View>;
  
  const PageHome = () => {
    //return <Home isMobile={false} />
    return <Instance isMobile={false} />
  }

  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/people" component={People} />
          <Route path="/tangents" component={Tangents} />
          <Route component={Notfound} />
        </Switch>
        <View style={styles.container}>
          <Footer />
        </View>
      </div>
    </Router>
  )
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
    padding: 10,
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
