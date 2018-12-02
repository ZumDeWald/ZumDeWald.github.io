import React, { Component } from 'react';


class Viewer extends Component {

  componentDidMount() {
    const lengthOfPics = this.props.pics.length;
    this.props.onSetTrayWidth(lengthOfPics);
  }

  componentDidUpdate() {
    const lengthOfPics = this.props.pics.length;
    this.props.onSetTrayWidth(lengthOfPics);
  }

  mainPicChanger = (updatedPic) => {
    document.getElementById("viewer-pic-element").children[0].srcset = `${updatedPic}_lg.webp`;
    document.getElementById("viewer-pic-element").children[1].src = `${updatedPic}_lg.jpg`;
  }

  render() {
    return (
    <article className="gallery-viewer-area">
      <div id="gallery-viewer-main">
        <picture id="viewer-pic-element">
          <source srcSet={`${this.props.pics[0]}_lg.webp`} type="image/webp" />
          <img id="viewer-pic-main" src={`${this.props.pics[0]}_lg.jpg`} alt="Main Pic" type="image/jpeg" />
        </picture>
      </div>

      <div className="gallery-viewer-tray">
        <ul id="gallery-tray-list">

          {this.props.pics.map((pic, index) => (
          <li tabIndex="1"
              key={index}
              className="gallery-tray-item"
              onKeyPress={() => {this.mainPicChanger(pic)}}
              onClick={() => {this.mainPicChanger(pic)}}
              >
              <picture>
                <source srcSet={`${pic}_sm.webp`} type="image/webp" />
                <img className="gallery-tray-pic" src={`${pic}_sm.jpg`} alt={pic} type="image/jpg" />
              </picture>
          </li>
          ))}
        </ul>
      </div>
    </article>
    );
  }
}


export default Viewer;
