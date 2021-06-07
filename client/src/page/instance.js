import React from 'react';
import { View } from 'react-native';

import { stylesMobile, stylesWeb } from '../styles/app';

//import { TestEmptyFrame, TestPhotoFrame, TestVideoFrame, TestBlogFrame, TestFrameWithJson } from '../../test/TestFrames';
import {frameItems as testData} from '../../test/data/frameData';
import Frame from '../component/frame';

class Instance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: props.isMobile,
      //frames: testData,
      frames: [],
    }
  }

  componentDidMount() {
    const apiURL = `http://localhost:3000/api/frame/page`;
    fetch(apiURL)
    .then(res => res.json())
    .then((jsonRes) => {
      if (jsonRes.message == "success") {
        this.setState({ frames: jsonRes.data })
      } else {
        console.log("API ERROR: " + jsonRes.message);
      }
    })
    .catch(console.log)
  }

  handleClick(item) {
    console.log("Clicked on item #" + item.id);
  }
  render() {
    let styles = stylesMobile; 
    if (!this.state.isMobile) { styles = stylesWeb; }
    return (
      <View style={styles.pageWrap}>
        {
          this.state.frames.map( (item) => {
            //console.log(item);
            return <Frame key={item.id} item={item} onClicked={this.handleClick} />
          })
        }
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
}

export default Instance;