import React from 'react';
import SelectedPicStyle from '../styled-components/SelectedPicStyle.jsx';
import ViewingLabelStyle from '../styled-components/ViewingLabelStyle.jsx'
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';

const SelectedPicEntry = (props) => (
  <MakeRowStyle>
    <SelectedPicStyle key={props.pic.id} src={props.pic.image_url} />
    <ViewingLabelStyle>Viewing</ViewingLabelStyle>
  </MakeRowStyle>
)

export default SelectedPicEntry;
