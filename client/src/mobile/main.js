import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
//import { NativeRouter, Route, Link } from "react-router-native";
// NOTE: react-router-native crashes on web build (with react-native-web) so we have to build this navigation ourselves

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello Mobile Users 👋</Text>
      <View style={styles.container2}>
        <Button icon="camera" mode="contained" onPress={props.onEnter}>
          Enter
        </Button>
      </View>
    </View>
  )
}

function FirstPage(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <MainBody onNavigate={props.onNavigate} gotoHome={props.gotoHome} gotoPeople={props.gotoPeople} gotoTangents={props.gotoTangents} />
  }
  return <Welcome onEnter={props.onEnter} />
}

function MainBody(props) {
  return (
    <View style={styles.container2}>
      <Button onPress={props.gotoHome}> Home </Button>
      <Button onPress={props.gotoPeople} > People </Button>
      <Button onPress={props.gotoTangents}> Tangents </Button>
    </View>
  )
}

// These will become separate pages
const Home = () => <View style={styles.container}><Text style={styles.header}>Home Page</Text></View>;
const People = () => <View style={styles.container}><Text style={styles.header}>All People</Text></View>;
const Tangents = () => <View style={styles.container}><Text style={styles.header}>All Tangents</Text></View>;

export default class MainMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentPage: 'none'
     }
  }

  EnterClicked=()=>{
    this.setState({isLoggedIn: true, currentPage: 'home'});
  }

  // I haven't gotten this working yet
  doNavigate=(gotoPage)=>{
    this.setState({currentPage: 'tangents'});
  }

  gotoHome=()=>{
    this.setState({currentPage: 'home'});
  }
  gotoPeople=()=>{
    this.setState({currentPage: 'people'});
  }
  gotoTangents=()=>{
    this.setState({currentPage: 'tangents'});
  }

  render() {
    const isHome = this.state.currentPage=='home'?true:false;
    const isPeople = this.state.currentPage=='people'?true:false;
    const isTangents = this.state.currentPage=='tangents'?true:false;

    return (
      <View>
        <FirstPage isLoggedIn={this.state.isLoggedIn} onEnter={this.EnterClicked} 
          gotoHome={this.gotoHome} gotoPeople={this.gotoPeople} gotoTangents={this.gotoTangents} />
        { isHome && <Home/> }
        { isPeople && <People/> }
        { isTangents && <Tangents/> }
      </View>
    );
  }
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
