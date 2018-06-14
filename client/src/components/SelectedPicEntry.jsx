import React from 'react';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';

const selectedMediaStyle = {
  height: "60px",
  width: "80px", 
  marginTop: "7px",
  marginBottom: "7px",
  marginLeft: "5px",
  marginRight: "5px",
  padding: "1px",
  border: "1px solid #021a40",
  backgroundColor: "#ff0"
}

const viewingStyle = {
  position: "relative",
  top: "45%",
  right: "85%",
  marginRight: "-60px",
  color: "white"
}

const SelectedPicEntry = (props) => (
  <MakeRowStyle>
    {props.pic.media_type === 'image' && <img key={props.pic.id} src={props.pic.media_url} style={selectedMediaStyle} />}
    {props.pic.media_type === 'video' && <video key={props.pic.id} controls src={props.pic.media_url} style={selectedMediaStyle} />}
    <span style={viewingStyle}>Viewing</span>
  </MakeRowStyle>
)

export default SelectedPicEntry;
