import React from 'react';
import PicEntryStyle from '../styled-components/PicEntryStyle.jsx';

const PicEntry = (props) => (
  <div className="picEntry">
    <PicEntryStyle src={props.pic.image_url} />
  </div>
)

export default PicEntry;

