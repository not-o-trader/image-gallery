import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentPic from './components/CurrentPic.jsx';
import PicList from './components/PicList.jsx';
import data from '../../data.json'
import TitleStyle from './styled-components/TitleStyle.jsx';
import Arrow from './components/Arrow.jsx';
import MakeRowStyle from './styled-components/MakeRowStyle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: data,
      selectedPic: data[0],
      currentIndex: 0,
      lastIndex: 6
    }
  }

  componentDidMount () {
    axios.get('/images', {
      params: {
        name: 'Tesla Roadster'
      }
    }).then((images) => {
        console.log("Images: ", images);
        this.setState({
          pics: images.data,
          selectedPic: images.data[0]
        })
    })
  }

  previousPic () {
    const lastIndex = this.state.pics.length - 1;
    const { currentIndex } = this.state;
    const needReset = currentIndex === 0;
    const index = needReset ? lastIndex : currentIndex - 1;

    this.setState({
      selectedPic: this.state.pics[index],
      currentIndex: index
    });
  }

  nextPic () {
    const lastIndex = this.state.pics.length - 1;
    const { currentIndex } = this.state;
    const needReset = currentIndex === lastIndex;
    const index = needReset ? 0 : currentIndex + 1;

    this.setState({
      selectedPic: this.state.pics[index],
      currentIndex: index
    });

  }

  pictureClick (e, index) {
    this.setState({
      selectedPic: this.state.pics[index],
      currentIndex: index
    })
  }

  goFullScreen () {

  }

  render () {
    return (<div>
      <TitleStyle>{this.state.selectedPic.car_name}</TitleStyle>
      <MakeRowStyle>
        <Arrow 
          direction="left"
          clickFunction= { this.previousPic.bind(this) }
          glyph="&#9664;" />
        <CurrentPic pic={this.state.selectedPic} />
        <Arrow 
          direction="right"
          clickFunction= {this.nextPic.bind(this)}
          glyph="&#9654;"/>
      </MakeRowStyle>
      <PicList pics={this.state.pics} selectedPic={this.state.selectedPic} onClick={this.pictureClick.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
