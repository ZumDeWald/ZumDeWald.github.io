import React, { Component } from 'react';


class Viewer extends Component {

  render() {
    return (
    <article className="gallery-viewer-area">
      <div className="gallery-viewer-main">
        <img id="viewer-pic-main"
          src={this.props.pics[0]} alt="Main Viewer Pic" />
      </div>

      <div className="gallery-viewer-tray">
        <ul id="gallery-tray-list">

          {this.props.pics.map((pic, index) => (
          <li key={index}
              className="gallery-tray-item"
              onClick={() => {document.getElementById("viewer-pic-main").src = pic}}
              ><img className="gallery-tray-pic"
                src={pic} alt={index} /></li>
          ))}

        </ul>
      </div>
    </article>
    );
  }
}


export default Viewer;
