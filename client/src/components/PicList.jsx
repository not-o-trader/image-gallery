import React from 'react';
import ListEntry from './ListEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';
import ButtonStyle from '../styled-components/ButtonStyle.jsx';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';
import ArrowForCollection from './ArrowForCollection.jsx';
import PageCountStyle from '../styled-components/PageCountStyle.jsx';
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
      selected: 'all',
      selectedMedia: this.props.pics[0]
    };
  }

  componentDidMount () {
    console.log(this.props.pics);
    this.setState({
      collection: this.props.pics,
      selected: 'all'
    });
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
      this.setState({
        collection: this.props.pics,
        selected: 'all',
        startIndex: 0,
        endIndex: 6,
        selectedMedia: this.props.pics[0],
        page: 1
      });
    }
  }

  imagesButtonClick() {
    if (this.state.selected !== 'images') {
      let pics = this.props.pics.filter((pic) => {
        return pic.media_type === 'image';
      });
      this.setState({
        collection: pics,
        selected: 'images',
        startIndex: 0,
        endIndex: 6,
        selectedMedia: pics[0],
        page: 1
      });
    }
  }

  videosButtonClick() {
    if (this.state.selected !== 'videos') {
      let videos = this.props.pics.filter((video) => {
        return video.media_type === 'video';
      });
      this.setState({
        collection: videos,
        selected: 'videos',
        startIndex: 0,
        endIndex: 6,
        selectedMedia: videos[0],
        page: 1
      });
    }
  }

  render () {
    let visiblePics = this.state.collection.filter((pic, index) => {
      return (index >= this.state.startIndex && index <= this.state.endIndex)
    });

    const counter = (type) => {
      let count = 0;
      this.props.pics.forEach((pic) => {
        if (pic.media_type === type) {
          count += 1;
        }
      })
      return count;
    }

    
    const videos = counter('video');
    const images = counter('image');
    
    return (
      <div>
        <ButtonRowStyle>
          <ButtonStyle onClick={() => this.allButtonClick()}>All({this.props.pics.length})</ButtonStyle>
          <ButtonStyle onClick={() => this.imagesButtonClick()}>Photos({images})</ButtonStyle>
          <ButtonStyle onClick={() => this.videosButtonClick()}>Videos({videos})</ButtonStyle>
          <PageCountStyle> Page {this.state.page} of {Math.ceil(this.state.collection.length/7)} </ PageCountStyle>
        </ButtonRowStyle>
        <MakeRowStyle>
          {this.state.startIndex > 0 && <ArrowForCollection 
            direction="left"
            clickFunction= { this.previousPicCollection.bind(this) }
            glyph="&#9664;" />}
          {visiblePics.map((pic, index) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry key={pic.id} pic={pic} checkSelectedIndex={this.checkSelectedIndex()}/> : <ListEntry key={pic.id} id={pic.id} pic={pic} index={index + this.state.startIndex} onClick={this.props.onClick}/>)}
          {this.state.endIndex < this.state.collection.length - 1 && <ArrowForCollection 
            direction="right"
            clickFunction= {this.nextPicCollection.bind(this)}
            glyph="&#9654;"/>}
        </MakeRowStyle>
      </div>
    )
  }
}

export default PicList;