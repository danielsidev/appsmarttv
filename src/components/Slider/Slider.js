import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from '../SliderContext/SliderContext'
import Content from '../Content/Content'
import SliderWrapper from '../SliderWrapper/SliderWrapper'
import useSliding from '../Use/useSliding'
import useSizeElement from '../Use/useSizeElement'
import Keyboard from '../Menu/keyBoard';
import './Slider.scss'

const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    slideProps,
    containerRef
  } = useSliding(width, React.Children.count(children));

  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const handleFocus = (e) =>{
    if(e!==undefined){ 
    console.log("Focus: "+e);
    Keyboard(e);
    }
  };

  const handleBlur = (e) =>{
    if(e!==undefined){ 
    console.log("Blur: "+e);
    Keyboard(e);
    }
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={cx('slider', { 'slider--open': currentSlide != null })}>
          <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
        </div>
      </SliderWrapper>
      {(currentSlide)?(
        <Content movie={currentSlide} onFocus={handleFocus} onBlur={handleBlur} />

        ):("")}
      
    </SliderContext.Provider>
  );
};

export default Slider;
