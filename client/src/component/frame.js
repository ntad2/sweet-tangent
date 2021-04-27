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
import { Button, Text } from 'react-native-paper';

import { textStyles as txt, alignStyles as align, 
  stylesMobile, stylesWeb } from '../styles/app';

function showTitle(title) {
  return <View style={align.center}>
      <Text style={txt.sm}>{title}</Text>
    </View>
}
function showPhoto (imgFile) {
  return <Image source={{ uri: imgFile }}
    style={{ width: '100%', height: '100%' }} />
}   // object-fit: 'cover'  // to keep aspect ratio

export default function Frame(props) {
  let styles = stylesMobile; if (!props.isMobile) { styles = stylesWeb; }

  let border = {
    height: 200,   // default to portrait
    width: 150,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
  }
  const item = props.item;
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
  
  function handleClick(e) {
    e.preventDefault();
    props.onClicked(item.id);
  }

  // note: onClick for View is onStartShouldSetResponder 
  return (
    <View style={styles.frameMargin} onStartShouldSetResponder={handleClick}>
      <View style={border}>
        { !item.type && <Text>This is an empty frame.</Text> }
        { item.type=='photo' && showPhoto(item.image) }
      </View>
      { item.title && showTitle(item.title) }
      {/* TODO: put likes/comments here */}
    </View>
  );
}
