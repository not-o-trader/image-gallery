import React from 'react';

const currentMediaStyle = {
  height: "490px",
  width: "653px",
  marginTop: "15px",
  marginBottom: "5px"
}

const CurrentPic = (props) => (
  <div className="selectedImage">
    {props.pic.media_type === 'image' && <img src={props.pic.media_url} style={currentMediaStyle}/>}
    {props.pic.media_type === 'video' && <video src={props.pic.media_url} style={currentMediaStyle} controls/>}
  </div>
)

export default CurrentPic;