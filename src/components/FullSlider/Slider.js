import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import Keyboard from '../Menu/keyBoard';
import './Slider.scss'

const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
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

  const setFocus = (e) =>{
    document.getElementById(e).focus();
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