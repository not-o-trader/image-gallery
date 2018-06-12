import React from 'react';
import SelectedPicStyle from '../styled-components/SelectedPicStyle.jsx';
import SelectedVideoStyle from '../styled-components/SelectedVideoStyle.jsx';
import ViewingLabelStyle from '../styled-components/ViewingLabelStyle.jsx'
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';

const SelectedPicEntry = (props) => (
  <MakeRowStyle>
    {props.pic.media_type === 'image' && <SelectedPicStyle key={props.pic.id} src={props.pic.media_url} />}
    {props.pic.media_type === 'video' && <SelectedVideoStyle key={props.pic.id} controls src={props.pic.media_url} />}
    <ViewingLabelStyle>Viewing</ViewingLabelStyle>
  </MakeRowStyle>
)

export default SelectedPicEntry;
