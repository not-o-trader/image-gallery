import React from 'react';
import PicEntryStyle from '../styled-components/PicEntryStyle.jsx';

const PicEntry = (props) => (
  <div className="picEntry">
    <PicEntryStyle src={props.pic.image_url} onClick={(e) => props.onClick(e, props.index)}/>
  </div>
)

export default PicEntry;

