import React from 'react';
import PicEntry from './PicEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';
import PicListStyle from '../styled-components/PicListStyle.jsx';
import ButtonStyle from '../styled-components/ButtonStyle.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <div className="buttonsRow">
          <ButtonStyle>All({this.props.pics.length})</ButtonStyle>
          <ButtonStyle>Photos({this.props.pics.length})</ButtonStyle>
          <ButtonStyle>Videos(0)</ButtonStyle>
        </div>
        <PicListStyle>
        {this.props.pics.map((pic) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry pic={pic}/> : <PicEntry pic={pic}/>)}
        </PicListStyle>
      </div>
    )
  }
}

export default PicList;