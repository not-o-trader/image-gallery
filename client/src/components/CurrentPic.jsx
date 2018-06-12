import React from 'react';
import CurrentPicStyle from '../styled-components/CurrentPicStyle.jsx';
import CurrentVideoStyle from '../styled-components/CurrentVideoStyle.jsx';

const CurrentPic = (props) => (
  <div className="selectedImage">
    {props.pic.media_type === 'image' && <CurrentPicStyle src={props.pic.media_url}/>}
    {props.pic.media_type === 'video' && <CurrentVideoStyle src={props.pic.media_url} controls/>}
  </div>
)

export default CurrentPic;