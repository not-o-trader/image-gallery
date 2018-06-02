import React from 'react';

const CurrentPic = (props) => (
  <div className="selectedImage">
    <h3>This div will be for picture</h3>
    <img src={props.pic.image_url}/>
  </div>
)

export default CurrentPic;