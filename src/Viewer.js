import React from 'react';

const Viewer = (props) => {

  //Destructuring
  const { currentPic, handlePrevPic, handleNextPic } = props;

  return (
    <article className="picture-viewer">
      <div className="pic-and-icons">
        <i className="fas fa-angle-left pic-change-icon hover-hand"
           onClick={() => {handlePrevPic(currentPic)}}></i>
        <i className="fas fa-angle-right pic-change-icon hover-hand"
           onClick={() => {handleNextPic(currentPic)}}></i>
        <picture>
          <source srcSet={`${currentPic[0]}_lg.webp`} type="image/webp" />
          <img className="viewer-pic" src={`${currentPic[0]}_lg.jpg`} alt={currentPic[0]} type="image/jpg" />
        </picture>
      </div>
    </article>
  )
}

export default Viewer;
