import React from 'react';
import SelectedPicStyle from '../styled-components/SelectedPicStyle.jsx';

const SelectedPicEntry = (props) => (
  <div className="selectedPicEntry">
    <SelectedPicStyle src={props.pic.image_url} />
  </div>
)

export default SelectedPicEntry;
