import React from 'react';
import App from '../components/App.jsx';
import ArrowForCurrent from '../components/ArrowForCurrent.jsx';
import PicList from '../components/PicList.jsx';
import ListEntry from '../components/ListEntry.jsx';
import { shallow, mount } from 'enzyme';
import axios from 'axios';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve()),
  };
});

describe('App component', () => {
  it('should mount once on componentDidMount', () => {
    const methodSpy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(methodSpy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it('should make a get request on componentDidMount', () => {
    const app = shallow(<App />);
    app.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
  });

  it('should call on previousPic function when left arrow is clicked', () => {
    const previousPic = jest.fn();
    const arrow = shallow(<ArrowForCurrent 
      direction="left"
      clickFunction= { previousPic }
      glyph="&#9664;" />).find('button').simulate('click');
      expect(previousPic).toHaveBeenCalledTimes(1);
  });

  it('should call on nextPic function when right arrow is clicked', () => {
    const nextPic = jest.fn();
    const arrow = shallow(<ArrowForCurrent 
      direction="right"
      clickFunction= { nextPic }
      glyph="&#9664;" />).find('button').simulate('click');
    expect(nextPic).toHaveBeenCalledTimes(1);
  });

  it('should call on pictureClick function when listEntry is clicked', () => {
    const pictureClick = jest.fn();
    const pic = mount(<ListEntry clickFunction={pictureClick} pic={{media_type: 'image'}}/>).find('picEntry').simulate('click');
    expect(pictureClick).toHaveBeenCalledTimes(1);
  })
  
  
})

