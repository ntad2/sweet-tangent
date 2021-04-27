import React from 'react';
import { View } from 'react-native';

import { stylesMobile, stylesWeb } from '../styles/app';

import { TestEmptyFrame, TestPhotoFrame, TestVideoFrame, TestBlogFrame } from '../../test/TestFrames';

export default function Home(props) {
  let styles = stylesMobile; if (!props.isMobile) { styles = stylesWeb; }

  return (
    <View style={styles.pageWrap}>
      <TestEmptyFrame/>
      <TestPhotoFrame/>
      <TestVideoFrame isMobile={props.isMobile} />
      <TestBlogFrame/>
    </View>
  )
}