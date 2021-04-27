/*This is the base component for the Photo Frame, Video Frame and Blog Frame
  1. It is fixed sized by default, but can be overridden (e.g. for blogs)
  2. For the fixed size, it has 2 layout options: portrait and landscape. 
  3. It has a main area to display a photo, video or blog.
  4. It has the option to show (default) or not show a border.
  5. Optionally, show the number of likes and the number of comments (separate components). 
  6. Optionally, give the option to show a label under the frame's border.
  7. On-click, pass the id back to the parent component.
*/
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { WebView } from "react-native-webview";

import { stylesMobile, stylesWeb, commonStyles as cmmn } from '../styles/app';

function showTitle(title, style) {
  return <View style={style}>
      <Text>{title}</Text>
    </View>
}
function showPhoto (imgFile) {
  // object-fit: 'cover'  // to keep aspect ratio
  return <Image source={{ uri: imgFile }}
    style={{ width: '100%', height: '100%' }} 
  />
}
function showVideo (videoSrc, title, isMobile) {
  if (isMobile) {
    return <WebView
      source={{ uri: videoSrc }}
      javaScriptEnabled={true}
      domStorageEnabled={true}   
    />
  }
  return <iframe width='200' height='150'
    src={ videoSrc }
    title={title} frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>  
}
function showBlog (text) {
  return <Text>{text}</Text>
}

export default function Frame(props) {
  const item = props.item;
  const isMobile = props.isMobile;
  // responsive
  let resp = stylesMobile; if (!isMobile) { resp = stylesWeb; }

  // customization
  let border = {
    height: 200,   // default to portrait
    width: 150,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
  }
  if (item.layout == "landscape") {
    border.width = 200; 
    border.height = 150;
  } else if (item.layout == "custom") {
    border.height = item.height;
    border.width = item.width;
  }
  if (item.border!=null && !item.border) {
    border.borderWidth = 0;
  }
  
  // events
  // note: onClick for View is onStartShouldSetResponder 
  function handleClick(e) {
    e.preventDefault();
    props.onClicked(item.id);
  }

  return (
    <View style={resp.frameMargin} onStartShouldSetResponder={handleClick}>
      { item.type=='blog' && item.title && showTitle(item.title, resp.blogTitle) }

      <View style={border}>
        { !item.type && <Text>This is an empty frame.</Text> }
        { item.type=='photo' && showPhoto(item.image) }
        { item.type=='video' && showVideo(item.source, item.title, isMobile) }
        { item.type=='blog' && showBlog(item.text) }
      </View>
      
      { item.type!='blog' && item.title && showTitle(item.title, cmmn.frameTitle) }
      {/* TODO: put likes/comments here */}
    </View>
  );
}
