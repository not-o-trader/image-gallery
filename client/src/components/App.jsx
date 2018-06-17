import React from 'react';
import axios from 'axios';
import CurrentPic from './CurrentPic.jsx';
import PicList from './PicList.jsx';
import TitleStyle from '../styled-components/TitleStyle.jsx';
import ArrowForCurrent from './ArrowForCurrent.jsx';
import MakeRowStyle from '../styled-components/MakeRowStyle.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      selectedPic: {},
      currentIndex: 0,
      lastIndex: 6,
      updated: true
    }
  }

  componentDidMount () {
    axios.get('http://18.191.161.74:7000/images', {
      params: {
        name: 'Tesla Roadster'
      }
    }).then((images) => {
        this.setState({
          pics: images.data,
          selectedPic: images.data[0],
          updated: true
        })
    }).catch((err) => {
      console.log('Could not find images');
    })
    this.setState({
      updated: false
    })
  }

  previousPic () {
    if (this.state.pics.length > 0) {
      const lastIndex = this.state.pics.length - 1;
      const { currentIndex } = this.state;
      const checkIfFirst = currentIndex === 0;
      const index = checkIfFirst ? currentIndex : currentIndex - 1;
  
      this.setState({
        selectedPic: this.state.pics[index],
        currentIndex: index
      });
    }
  }

  nextPic () {
    if (this.state.pics.length > 0) {
      const lastIndex = this.state.pics.length - 1;
      const { currentIndex } = this.state;
      const checkIfLast = currentIndex === lastIndex;
      const index = checkIfLast ? currentIndex : currentIndex + 1;
  
      this.setState({
        selectedPic: this.state.pics[index],
        currentIndex: index
      });
    }

  }

  pictureClick (e, id) {
    let index = 0;
    console.log('pics= ', this.state.pics)
    for (let i = 0; i < this.state.pics.length; i++) {
      if (this.state.pics[i].id === id) {
        index = i;
      }
    }
    this.setState({
      selectedPic: this.state.pics[index],
      currentIndex: index
    })
  }

  render () {
    return (<div>
      <TitleStyle>{this.state.selectedPic.car_name}</TitleStyle>
      <MakeRowStyle>
        <ArrowForCurrent 
          direction="left"
          clickFunction= { this.previousPic.bind(this) }
          glyph="&#9664;" />
        <CurrentPic pic={this.state.selectedPic} />
        <ArrowForCurrent 
          direction="right"
          clickFunction= {this.nextPic.bind(this)}
          glyph="&#9654;"/>
      </MakeRowStyle>
      {this.state.updated && <PicList pics={this.state.pics} selectedPic={this.state.selectedPic} onClick={this.pictureClick.bind(this)}/>}
      </div>)
  }
}

export default App;
