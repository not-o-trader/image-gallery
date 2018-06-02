import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CurrentPic from './components/CurrentPic.jsx';
import PicList from './components/PicList.jsx';
import data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: data,
      selectedPic: data[0]
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
      .catch((err) => {
        console.log('Error fetching images');
      });
    })
  }

  pictureClick (e) {
    this.setState({
      selectedPic: e.target.value
    })
  }

  render () {
    return (<div>
      <h1>{this.state.selectedPic.car_name}</h1>
      <CurrentPic pic={this.state.selectedPic} />
      <PicList pics={this.state.pics} pic={this.state.selectedPic} onClick={this.pictureClick.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
