import React from 'react';
import { View } from 'react-native';

import { stylesMobile, stylesWeb } from '../styles/app';

//import { TestEmptyFrame, TestPhotoFrame, TestVideoFrame, TestBlogFrame, TestFrameWithJson } from '../../test/TestFrames';
import {frameItems as data} from '../../test/data/frameData';
import Frame from '../component/frame';

export default function Instance(props) {
  let styles = stylesMobile; if (!props.isMobile) { styles = stylesWeb; }
  const items = data.map( (item) => {
    return <Frame item={item} onClicked={handleClick} />
  })
  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  return (
    <View style={styles.pageWrap}>
      { items }
{/* 
      <TestEmptyFrame/>
      <TestPhotoFrame/>
      <TestVideoFrame isMobile={props.isMobile} />
      <TestBlogFrame/>
      <TestFrameWithJson isMobile={props.isMobile} />
*/}
    </View>
  )
}