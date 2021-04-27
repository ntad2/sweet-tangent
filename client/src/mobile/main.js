import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
// NOTE: react-router-native crashes on web build (with react-native-web) so we have to build this navigation ourselves
//import { NativeRouter, Route, Link } from "react-router-native";

import { mainStyles as styles } from '../styles/app';
import Home from '../page/home';

function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello Mobile Users 👋</Text>
      <Button icon="camera" mode="contained" onPress={props.onEnter}>
        Enter
      </Button>
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
    <View style={styles.navWrap}>
      <View  style={styles.nav}>
      <Button style={styles.navItem} onPress={props.gotoHome}> Home </Button>
      <Button style={styles.navItem} onPress={props.gotoPeople} > People </Button>
      <Button style={styles.navItem} onPress={props.gotoTangents}> Tangents </Button>
      </View>
    </View>
  )
}

// These will become separate pages
const People = () => <View style={styles.container}><Text style={styles.header}>All People</Text></View>;
const Tangents = () => <View style={styles.container}><Text style={styles.header}>All Tangents</Text></View>;

export default class MainMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      currentPage: 'home'
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
        { isHome && <Home isMobile={true} /> }
        { isPeople && <People/> }
        { isTangents && <Tangents/> }
      </View>
    );
  }
}

