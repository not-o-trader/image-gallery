import React from 'react';
import ListEntry from './ListEntry.jsx';
import SelectedPicEntry from './SelectedPicEntry.jsx';
import ButtonStyle from '../styled-components/ButtonStyle.jsx';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';
import ArrowForCollection from './ArrowForCollection.jsx';
import PageCountStyle from '../styled-components/PageCountStyle.jsx';
import ButtonRowStyle from '../styled-components/ButtonRowStyle.jsx';
import SelectedButtonStyle from '../styled-components/SelectedButtonStyle.jsx';

class PicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 6,
      page: 1,
      lastPage: '',
      collection: this.props.pics,
      all: this.props.pics.length,
      selected: 'all',
      selectedMedia: this.props.pics[0],
      images: 0,
      videos: 0,
    };
  }

  componentDidMount () {
    this.setState({
      collection: this.props.pics,
      selected: 'all',
      lastPage: Math.ceil(this.props.pics.length/7),
      images: this.counter('image'),
      videos: this.counter('video'),
      allMedia: this.props.pics
    });
  }

  counter (type) {
    let count = 0;
    this.props.pics.forEach((pic) => {
      if (pic.media_type === type) {
        count += 1;
      }
    })
    return count;
  }

  previousPicCollection () {
    this.setState({
      startIndex: this.state.startIndex - 7,
      endIndex: this.state.startIndex -1, 
      page: this.state.page -1
    });
  }

  nextPicCollection () {
    this.setState({
      startIndex: this.state.startIndex + 7,
      endIndex: this.state.endIndex + 7,
      page: this.state.page + 1
    });
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
        page: 1,
        lastPage: Math.ceil(this.props.pics.length/7) 
      });
      this.props.buttonSelect(this.props.pics[0])
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
        page: 1,
        lastPage: Math.ceil(pics.length/7)
      });
      this.props.buttonSelect(pics[0]);
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
        page: 1,
        lastPage: Math.ceil(videos.length/7)
      });
      this.props.buttonSelect(videos[0])
    }
  }

  render () {
    let visiblePics = this.state.collection.filter((pic, index) => {
      return (index >= this.state.startIndex && index <= this.state.endIndex)
    });
    
    return (
      <div>
        <ButtonRowStyle>
          {this.state.selected === "all" ? <SelectedButtonStyle onClick={() => this.allButtonClick()}>All({this.props.pics.length})</SelectedButtonStyle> : <ButtonStyle onClick={() => this.allButtonClick()}>All({this.props.pics.length})</ButtonStyle>}
          {this.state.selected === "images" ? <SelectedButtonStyle onClick={() => this.imagesButtonClick()}>Photos({this.state.images})</SelectedButtonStyle> : <ButtonStyle onClick={() => this.imagesButtonClick()}>Photos({this.state.images})</ButtonStyle>}
          {this.state.selected === "videos" ? <SelectedButtonStyle onClick={() => this.videosButtonClick()}>Videos({this.state.videos})</SelectedButtonStyle> : <ButtonStyle onClick={() => this.videosButtonClick()}>Videos({this.state.videos})</ButtonStyle>}
          <PageCountStyle> Page {this.state.page} of {this.state.lastPage} </ PageCountStyle>
        </ButtonRowStyle>
        <MakeRowStyle>
          {this.state.page > 1 && <ArrowForCollection 
            direction="left"
            clickFunction= { this.previousPicCollection.bind(this) }
            glyph="&#9664;" />}
          {visiblePics.map((pic, index) => pic.id === this.props.selectedPic.id ? <SelectedPicEntry key={pic.id} pic={pic} checkSelectedIndex={() => this.checkSelectedIndex()}/> : <ListEntry key={pic.id} id={pic.id} pic={pic} index={index + this.state.startIndex} onClick={this.props.onClick}/>)}
          {this.state.page !== this.state.lastPage && <ArrowForCollection 
            direction="right"
            clickFunction= {this.nextPicCollection.bind(this)}
            glyph="&#9654;"/>}
        </MakeRowStyle>
      </div>
    )
  }
}

export default PicList;