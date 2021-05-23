import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { stylesMobile, stylesWeb } from '../styles/app';

export default function Home(props) {
//  let styles = stylesMobile; if (!props.isMobile) { styles = stylesWeb; }

  return (
    <View style={styles.pageWrap}>
      <View style={styles.centerMe}>
        <Text style={styles.text}>Hello Mobile Users 👋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  pageWrap: {
    width: 400,
    height: 700,
  },
  // NOT WORKING!!!!
  centerMe: {
//    backgroundColor:'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
//    backgroundColor:'blue',
  }
})