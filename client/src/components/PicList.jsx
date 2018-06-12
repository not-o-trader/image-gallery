import React from 'react';
import ListEntry from './ListEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';
import ButtonStyle from '../styled-components/ButtonStyle.jsx';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';
import ArrowForCollection from './ArrowForCollection.jsx';
import PageCountStyle from '../styled-components/PageCountStyle.jsx';
import PicListStyle from '../styled-components/PicListStyle.jsx';
import ButtonRowStyle from '../styled-components/ButtonRowStyle.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 6,
      page: 1,
      collection: this.props.pics,
      all: this.props.pics.length,
      images: this.counter('images'),
      videos: this.counter('videos'),
      selected: 'all'
    };
  }

  previousPicCollection () {
    if (this.state.startIndex !== 0) {
      if (this.state.startIndex >= 7) {
        this.setState({
          startIndex: this.state.startIndex - 7,
          endIndex: this.state.startIndex -1, 
          page: this.state.page -1
        });
      } else {
        this.setState({
          startIndex: 0,
          endIndex: 6,
          page: this.state.page -1
        })
      }
    } 
  }

  nextPicCollection () {
    if (this.state.endIndex < this.props.pics.length-1) {
      if (this.state.endIndex + 7 <= this.props.pics.length) {
        this.setState({
          startIndex: this.state.startIndex + 7,
          endIndex: this.state.endIndex + 7,
          page: this.state.page + 1
        });
      } else {
          this.setState({
            startIndex: this.state.startIndex + 7,
            endIndex: this.props.pics.length - 1,
            page: this.state.page + 1
          })
      }
    } 
  }
  
  counter(type) {
    let count = 0;
      this.props.pics.forEach((pic) => {
        if (pic.media_type === type) {
          count += 1;
        }
      })
    return count;
  }

  checkSelectedIndex() {
    let selectedIndex = this.props.pics.indexOf(this.props.selectedPic);
    if (selectedIndex > this.state.endIndex) {
      this.setState({
        startIndex: selectedIndex,
        endIndex: selectedIndex + 6
      })
    } 
  }

  allButtonClick() {
    if (this.state.selected !== 'all') {

    }
  }

  render () {
    let visiblePics = this.props.pics.filter((pic, index) => {
      return (index >= this.state.startIndex && index <= this.state.endIndex)
    });
    
    return (
      <div>
        <ButtonRowStyle>
          <ButtonStyle>All({this.props.pics.length})</ButtonStyle>
          <ButtonStyle>Photos({this.state.images})</ButtonStyle>
          <ButtonStyle>Videos({this.state.videos})</ButtonStyle>
          <PageCountStyle> Page {this.state.page} of {Math.ceil(this.props.pics.length/7)} </ PageCountStyle>
        </ButtonRowStyle>
        <MakeRowStyle>
          {this.state.startIndex > 0 && <ArrowForCollection 
            direction="left"
            clickFunction= { this.previousPicCollection.bind(this) }
            glyph="&#9664;" />}
          {visiblePics.map((pic, index) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry key={pic.id} pic={pic} checkSelectedIndex={this.checkSelectedIndex()}/> : <ListEntry key={pic.id} pic={pic} index={index + this.state.startIndex} onClick={this.props.onClick}/>)}
          {this.state.endIndex < this.props.pics.length - 1 && <ArrowForCollection 
            direction="right"
            clickFunction= {this.nextPicCollection.bind(this)}
            glyph="&#9654;"/>}
        </MakeRowStyle>
      </div>
    )
  }
}

export default PicList;