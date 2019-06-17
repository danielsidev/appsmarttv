import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Slider from './components/FullSlider';
import VerticalMenu from './components/Menu/verticalMenu';
import Keyboard from './components/Menu/keyBoard';
import './App.scss'

const feature = {
  id: 1,
  image: '/images/slide1.jpg',
  imageBg: '/images/slide1b.webp',
  title: '1983'
};
const movies = [
  
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];

class App extends React.Component {

  componentDidMount(){
    document.addEventListener("keydown", Keyboard, false);
    document.getElementById('assista').focus();
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", Keyboard, false);


  }
  render() {
    return (
      <div className="app">
        <VerticalMenu/>
        <Slider activeSlide={feature } >
          {movies.map(movie => (
            <Slider.Item movie={movie} feature={feature} key={movie.id} onF>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
