import React from 'react';
import CurrentPicStyle from '../styled-components/CurrentPicStyle.jsx'

const CurrentPic = (props) => (
  <div className="selectedImage">
    <CurrentPicStyle src={props.pic.image_url}/>
  </div>
)

export default CurrentPic;