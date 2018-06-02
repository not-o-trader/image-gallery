import React from 'react';

const PicEntry = (props) => (
  <div className="picEntry">
    <img src={props.pic.image_url}/>
  </div>
)

export default PicEntry;

