import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewerChooser from './ViewerChooser.js';
import Viewer from './Viewer.js';
import ScrollToTopOnMount from './ScrollToTopOnMount.js';

class MainGallery extends Component {

  state = {
    maternityPics: [
      "../img/maternity/mat1",
      "../img/maternity/mat2",
      "../img/maternity/mat3",
      "../img/maternity/mat4",
    ],
    newbornPics: [
      "../img/nb/nb1",
      "../img/nb/nb2",
      "../img/nb/nb3",
      "../img/nb/nb4",
      "../img/nb/nb5",
      "../img/nb/nb6",
      "../img/nb/nb7",
      "../img/nb/nb8",
      "../img/nb/nb9",
      "../img/nb/nb10",
      "../img/nb/nb11",
      "../img/nb/nb12",
      "../img/nb/nb13",
    ],
    babyPics: [
      "../img/baby/babyPic1",
      "../img/baby/babyPic2",
      "../img/baby/babyPic3",
      "../img/baby/babyPic4",
      "../img/baby/babyPic5",
      "../img/baby/babyPic6",
      "../img/baby/babyPic7",
    ],
    famPics: [
      "../img/fam/fam1",
      "../img/fam/fam2",
      "../img/fam/fam3",
      "../img/fam/fam4",
      "../img/fam/fam5",
      "../img/fam/fam6",
      "../img/fam/fam7",
      "../img/fam/fam8",
      "../img/fam/fam9",
      "../img/fam/fam10",
      "../img/fam/fam11",
      "../img/fam/fam12",
      "../img/fam/fam13",
      "../img/fam/fam14",
      "../img/fam/fam15",
      "../img/fam/fam16",
      "../img/fam/fam17",
      "../img/fam/fam18",
      "../img/fam/fam19",
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
