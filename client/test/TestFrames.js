import React from 'react';

import Frame from '../src/component/frame';

export function TestEmptyFrame() {  
  let item = {
    layout: "portrait",
  };

  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  // note: add () to handleClick will call this function on load
  return (
    <Frame item={item} onClicked={handleClick} />
  )  
}

export function TestPhotoFrame() {  
  let item = {
    id: 1,
    layout: "landscape",
    border: false,
    type: "photo",
    title: "My Meetup Group",
    image: "https://secure.meetupstatic.com/photos/event/5/d/e/1/600_461784033.jpeg",
  };

  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  // note: add () to handleClick will call this function on load
  return (
    <Frame item={item} onClicked={handleClick} />
  )  
}
