import React from 'react';

const CurrentPic = (props) => (
  <div className="selectedImage">
    <img src={props.pic.image_url}/>
  </div>
)

export default CurrentPic;