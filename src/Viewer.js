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
    document.getElementById("viewer-pic-element").children[0].srcset = `${updatedPic}.webp`;
    document.getElementById("viewer-pic-element").children[1].src = `${updatedPic}.jpg`;
  }

  render() {
    return (
    <article className="gallery-viewer-area">
      <div id="gallery-viewer-main">
        <picture id="viewer-pic-element">
          <source srcSet={`${this.props.pics[0]}.webp`} type="image/webp" />
          <img id="viewer-pic-main" src={`${this.props.pics[0]}.jpg`} alt="Main Pic" type="image/jpeg" />
        </picture>
      </div>

      <div className="gallery-viewer-tray">
        <ul id="gallery-tray-list">

          {this.props.pics.map((pic, index) => (
          <li key={index}
              className="gallery-tray-item"
              onClick={() => {this.mainPicChanger(pic)}}
              >
              <picture>
                <source srcSet={`${pic}.webp`} type="image/webp" />
                <img className="gallery-tray-pic" src={`${pic}.jpg`} alt={pic} type="image/jpg" />
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
