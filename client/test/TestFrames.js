import React from 'react';

import Frame from '../src/component/frame';

export function TestEmptyFrame(props) {  
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

export function TestPhotoFrame(props) {  
  let item = {
    id: 1,
    layout: "landscape",
    type: "photo",
    title: "My Meetup Group",
    image: "https://secure.meetupstatic.com/photos/event/5/d/e/1/600_461784033.jpeg",
  };

  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  // note: add () to handleClick will call this function on load
  return (
    <Frame item={item} isMobile={props.isMobile} onClicked={handleClick} />
  )  
}

export function TestVideoFrame(props) {  
  let item = {
    id: 2,
    layout: "landscape",
    type: "video",
    title: "Happy Hour & Karaoke",
    source: "https://www.youtube.com/embed/1fSRJHzlcRk",
  };

  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  // note: add () to handleClick will call this function on load
  return (
    <Frame item={item} isMobile={props.isMobile} onClicked={handleClick} />
  )  
}

export function TestBlogFrame(props) {  
  let item = {
    id: 3,
    layout: "custom",
    width: 400,
    height: 800,
    border: false,
    type: "blog",
    title: "Scuba Diving in Australia",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "
      + "\n\nNemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
      + "\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
  };

  function handleClick(id) {
    console.log("Clicked on item #" + id);
  }

  // note: add () to handleClick will call this function on load
  return (
    <Frame item={item} isMobile={props.isMobile} onClicked={handleClick} />
  )  
}
