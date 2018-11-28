import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewerChooser from './ViewerChooser.js';
import Viewer from './Viewer.js';
import ScrollToTopOnMount from './ScrollToTopOnMount.js';

class MainGallery extends Component {

  state = {
    maternityPics: [
      "../img/maternity/mat1.jpg",
      "../img/maternity/mat2.jpg",
      "../img/maternity/mat3.jpg",
      "../img/maternity/mat4.jpg",
      "../img/maternity/mat5.jpg",
      "../img/maternity/mat6.jpg",
      "../img/maternity/mat7.jpg",
    ],
    newbornPics: [
      "../img/nb/nb1.jpg",
      "../img/nb/nb2.jpg",
      "../img/nb/nb3.jpg",
      "../img/nb/nb4.jpg",
      "../img/nb/nb5.jpg",
      "../img/nb/nb6.jpg",
      "../img/nb/nb7.jpg",
      "../img/nb/nb8.jpg",
      "../img/nb/nb9.jpg",
      "../img/nb/nb10.jpg",
      "../img/nb/nb11.jpg",
      "../img/nb/nb12.jpg",
      "../img/nb/nb13.jpg",
    ],
    babyPics: [
      "../img/baby/babyPic1.jpg",
      "../img/baby/babyPic2.jpg",
      "../img/baby/babyPic3.jpg",
      "../img/baby/babyPic4.jpg",
      "../img/baby/babyPic5.jpg",
      "../img/baby/babyPic6.jpg",
      "../img/baby/babyPic7.jpg",
    ],
    famPics: [
      "../img/fam/fam1.jpg",
      "../img/fam/fam2.jpg",
      "../img/fam/fam3.jpg",
      "../img/fam/fam4.jpg",
      "../img/fam/fam5.jpg",
      "../img/fam/fam6.jpg",
      "../img/fam/fam7.jpg",
      "../img/fam/fam8.jpg",
      "../img/fam/fam9.jpg",
      "../img/fam/fam10.jpg",
      "../img/fam/fam11.jpg",
      "../img/fam/fam12.jpg",
      "../img/fam/fam13.jpg",
      "../img/fam/fam14.jpg",
      "../img/fam/fam15.jpg",
      "../img/fam/fam16.jpg",
      "../img/fam/fam17.jpg",
      "../img/fam/fam18.jpg",
      "../img/fam/fam19.jpg",
    ],
  }

  setTrayWidth = (lengthOfPics) => {
    let widthToSet = (lengthOfPics * 210);
    let viewerTray = document.getElementById("gallery-tray-list");
    viewerTray.style.width = `${widthToSet}px`;
  }

  render() {
    return (
      <section id="gallery-container" className="dark-bg">
        <ScrollToTopOnMount />

        <ViewerChooser />

        <Switch>
          <Route exact path="/gallery" render={() => (
            <Viewer
              pics={this.state.newbornPics}
              onSetTrayWidth={this.setTrayWidth} />
          )} />
          <Route path="/gallery/maternity" render={() => (
            <Viewer
              pics={this.state.maternityPics}
              onSetTrayWidth={this.setTrayWidth} />
          )} />
          <Route path="/gallery/newborn" render={() => (
            <Viewer
              pics={this.state.newbornPics}
              onSetTrayWidth={this.setTrayWidth} />
          )} />
          <Route path="/gallery/babies" render={() => (
            <Viewer
              pics={this.state.babyPics}
              onSetTrayWidth={this.setTrayWidth} />
          )} />
          <Route path="/gallery/fam" render={() => (
            <Viewer
            pics={this.state.famPics}
            onSetTrayWidth={this.setTrayWidth} />
          )} />
        </Switch>

      </section>
    );
  }
}

export default MainGallery;
