import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
// NOTE: react-router-native crashes on web build (with react-native-web) so we have to build this navigation ourselves

import { styles as styles } from '../styles/main';
import Home from '../page/home';
import Instance from '../page/instance';

// These will become separate pages
const People = () => <View style={styles.tempSpace}><Text style={styles.header}>All People - coming soon...</Text></View>;
const Tangents = Instance;    // display this page for now

// FUTURE: we'll add authentication here
function Welcome(props) {
  return (
    <SafeAreaView style={styles.centerAll}>
      <StatusBar style="auto" />
      <Text>Hello Mobile Users 👋</Text>
      <Button icon="camera" mode="contained" onPress={props.onEnter}>
        Enter
      </Button>
    </SafeAreaView>
  )
}

function MainBody(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.navWrap}>
          <View  style={styles.nav}>
          <Button style={styles.navItem} onPress={ () => props.onNavigate('home') }> Home </Button>
          <Button style={styles.navItem} onPress={ () => props.onNavigate('people') }> People </Button>
          <Button style={styles.navItem} onPress={ () => props.onNavigate('tangents') }> Tangents </Button>
          </View>
        </View>
        <View>
          { props.currentPage=='home' && <Home isMobile={true} /> }
          { props.currentPage=='people' && <People isMobile={true} /> }
          { props.currentPage=='tangents' && <Tangents isMobile={true} /> }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function Authenticate(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <MainBody currentPage={props.currentPage} onNavigate={props.onNavigate} 
      gotoHome={props.gotoHome} gotoPeople={props.gotoPeople} gotoTangents={props.gotoTangents} />
  }
  return <Welcome onEnter={props.onEnter} />
}

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
  doNavigate=(gotoPage)=>{
    this.setState({currentPage: gotoPage});
  }
  
  render() {
    return (
      <Authenticate isLoggedIn={this.state.isLoggedIn} currentPage={this.state.currentPage}
        onEnter={this.EnterClicked} onNavigate={this.doNavigate} gotoHome={this.gotoHome} />
    );
  }
}
