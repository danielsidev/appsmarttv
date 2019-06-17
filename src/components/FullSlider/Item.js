import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'
import Keyboard from '../Menu/keyBoard';

const Item = ({ feature, movie }) => (
  

  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
    
      const isActive = currentSlide && currentSlide.id === movie.id;
      return (
        <div ref={elementRef} className={cx('screen-slider item', {'item--open': isActive,})}
          onClick={() => onSelectSlide(movie)}
          onFocus={() => onSelectSlide(movie)}
          onBlur={ () => { Keyboard(elementRef).then( res => { console.log("feature: "+res); if(res){onSelectSlide(feature)}}); ;}}
          tabIndex={movie.id}
          id={"screen-"+movie.id} 
        >
          <img src={movie.image} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
