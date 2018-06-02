import React from 'react';
import PicEntry from './PicEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';
import ButtonStyle from '../styled-components/ButtonStyle.jsx';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: this.props.selectedPic
    };
  }

  render () {
    return (
      <div>
        <div className="buttonsRow">
          <ButtonStyle>All({this.props.pics.length})</ButtonStyle>
          <ButtonStyle>Photos({this.props.pics.length})</ButtonStyle>
          <ButtonStyle>Videos(0)</ButtonStyle>
        </div>
        <MakeRowStyle>
        {this.props.pics.map((pic, index) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry pic={pic}/> : <PicEntry pic={pic} index={index} onClick={this.props.onClick}/>)}
        </MakeRowStyle>
      </div>
    )
  }
}

export default PicList;