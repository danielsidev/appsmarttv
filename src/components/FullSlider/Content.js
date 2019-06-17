import React from 'react';
import IconCross from '../Icons/IconCross';
import IconPlay from '../Icons/IconPlay';

import './Content.scss';

const Content = ({ movie, onFocus, onBlur }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
        { movie.id===1 && <div className="feature-bt-container"> 
        <div className="feature-bt" id="assista" onFocus={onFocus} onBlur={onBlur} tabIndex="0"><IconPlay />Assista</div> 
        <div id="veja-mais"  className="feature-bt" tabIndex="1">Veja mais</div>   </div>}
      </div>
    </div>
  </div>
);

export default Content;
