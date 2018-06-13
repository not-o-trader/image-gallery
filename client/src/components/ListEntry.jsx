import React from 'react';


const mediaEntryStyle = {
  height: "60px",
  width: "80px",
  marginTop: "7px",
  marginBottom: "7px",
  marginLeft: "5px",
  marginRight: "5px"
}

const ListEntry = (props) => (
  <div className="picEntry" onClick={(e) => props.onClick(e, props.index)}>
    {props.pic.media_type === 'image' && <img src={props.pic.media_url} style={mediaEntryStyle} />}
    {props.pic.media_type === 'video' && <video src={props.pic.media_url} style={mediaEntryStyle} />}
  </div>
)

export default ListEntry;

