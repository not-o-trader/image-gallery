import React from 'react';
import PicEntry from './PicEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <div className="buttonsRow">
          <button type="button">"All({this.props.pics.length})"</button>
        </div>
        <div className="picList">
          {this.props.pics.map((pic) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry pic={pic}/> : <PicEntry pic={pic}/>)}
        </div>
      </div>
    )
  }
}

export default PicList;