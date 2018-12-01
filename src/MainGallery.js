import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewerChooser from './ViewerChooser.js';
import Viewer from './Viewer.js';
import ScrollToTopOnMount from './ScrollToTopOnMount.js';

class MainGallery extends Component {

  state = {
    maternityPics: [
      "../img/maternity/mat1_lrg",
      "../img/maternity/mat2_lrg",
      "../img/maternity/mat3_lrg",
      "../img/maternity/mat4_lrg",
    ],
    newbornPics: [
      "../img/nb/nb1_lrg",
      "../img/nb/nb2_lrg",
      "../img/nb/nb3_lrg",
      "../img/nb/nb4_lrg",
      "../img/nb/nb5_lrg",
      "../img/nb/nb6_lrg",
      "../img/nb/nb7_lrg",
      "../img/nb/nb8_lrg",
      "../img/nb/nb9_lrg",
      "../img/nb/nb10_lrg",
      "../img/nb/nb11_lrg",
      "../img/nb/nb12_lrg",
      "../img/nb/nb13_lrg",
    ],
    babyPics: [
      "../img/baby/babyPic1_lrg",
      "../img/baby/babyPic2_lrg",
      "../img/baby/babyPic3_lrg",
      "../img/baby/babyPic4_lrg",
      "../img/baby/babyPic5_lrg",
      "../img/baby/babyPic6_lrg",
      "../img/baby/babyPic7_lrg",
    ],
    famPics: [
      "../img/fam/fam1_lrg",
      "../img/fam/fam2_lrg",
      "../img/fam/fam3_lrg",
      "../img/fam/fam4_lrg",
      "../img/fam/fam5_lrg",
      "../img/fam/fam6_lrg",
      "../img/fam/fam7_lrg",
      "../img/fam/fam8_lrg",
      "../img/fam/fam9_lrg",
      "../img/fam/fam10_lrg",
      "../img/fam/fam11_lrg",
      "../img/fam/fam12_lrg",
      "../img/fam/fam13_lrg",
      "../img/fam/fam14_lrg",
      "../img/fam/fam15_lrg",
      "../img/fam/fam16_lrg",
      "../img/fam/fam17_lrg",
      "../img/fam/fam18_lrg",
      "../img/fam/fam19_lrg",
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
