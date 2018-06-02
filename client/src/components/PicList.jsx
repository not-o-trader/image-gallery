import React from 'react';
import PicEntry from './PicEntry.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: props.pics,
      selectedPic: props.pic
    };
  }

  render () {
    return (
      <div>
        <div className="buttonsRow">
          <button type="button">"All()"</button>
        </div>
        <div className="picList">
          {props.pics.map((pic) => {if (pics.id === pic.id) {<SelectedPicEntry />} else { <PicEntry />}})}
        </div>
      </div>
    )
  }
}

export default PicList;