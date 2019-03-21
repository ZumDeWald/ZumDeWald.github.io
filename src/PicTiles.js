import React, { useState } from 'react';

import Viewer from "./Viewer.js";

const PicTiles = (props) => {

  //Destructuring
  const { pics } = props;

  /* React State Hook used to set wether menu is open and provides a method to change the state */
  const [currentPic, setCurrentPic] = useState([pics[0], 0]);

  // Sets hook state currentPic to what is passed in
  const setViewerPic = (index) => {
    setCurrentPic([pics[index], index]);
  };

  /* Function to change pic in viewer to next in array, or move to first if at end */
  const setNextPic = (refPic) => {
    if (refPic[1] < (pics.length - 1)) {
      let nextPic = (refPic[1] + 1);
      setCurrentPic([pics[nextPic], nextPic]);
    } else {
      setCurrentPic([pics[0], 0]);
    }
  }

  /* Function to change pic in viewer to previous in array, or move to last if at beginning */
  const setPrevPic = (refPic) => {
    const totalPics = (pics.length - 1);
    if (refPic[1] > 0) {
      let nextPic = (refPic[1] - 1);
      setCurrentPic([pics[nextPic], nextPic]);
    } else {
      setCurrentPic([pics[totalPics], totalPics]);
    }
  }

  return (
    <section>
      <Viewer currentPic={currentPic}
              handleNextPic={setNextPic}
              handlePrevPic={setPrevPic} />
      <article className="gallery-viewer-area">
        <ul className="tile-list">
          {pics.map((pic, index) => (
            <li className="tile-item"
                key={index}>
              <picture>
                <source srcSet={`${pic}_sm.webp`} type="image/webp" />
                <img className="tile-pic hover-hand"
                     src={`${pic}_sm.jpg`}
                     alt={pic}
                     type="image/jpg"
                     onClick={() => {setViewerPic(index)}} />
              </picture>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}


export default PicTiles;
