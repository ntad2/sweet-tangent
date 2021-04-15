import React from 'react';

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

import MainMobile from '../mobile/main';
import MainWeb from '../web/main';

/*
NOTE: we are creating two separate versions of main here
because react-router-native does not work with web
*/
export default function Main() {

  // NOTE: this must go inside the body of a function component. Top level.
  const isTabletOrMobileDevice = useMediaQuery({    
    maxDeviceWidth: 1224,
    // alternatively...
    query: "(max-device-width: 1224px)"  
  });

  function Body() {
    if (isTabletOrMobileDevice) {
      return <MainMobile/>
    } else {
      return <MainWeb/>
    }
  }

  return (
      <Body/>
  );

}
