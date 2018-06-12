import React from 'react';
import PicEntryStyle from '../styled-components/PicEntryStyle.jsx';
import VideoEntryStyle from '../styled-components/VideoEntryStyle.jsx';

const ListEntry = (props) => (
  <div className="picEntry" onClick={(e) => props.onClick(e, props.index)}>
    {props.pic.media_type === 'image' && <PicEntryStyle src={props.pic.media_url} />}
    {props.pic.media_type === 'video' && <VideoEntryStyle src={props.pic.media_url} />}
  </div>
)

export default ListEntry;

