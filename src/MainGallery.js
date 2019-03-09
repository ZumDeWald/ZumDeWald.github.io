import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DropMenu from './DropMenu.js';
import GalleryButtons from './GalleryButtons.js';
import PicTiles from './PicTiles.js';
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
      "../img/baby/baby1",
      "../img/baby/baby2",
      "../img/baby/baby3",
      "../img/baby/baby4",
      "../img/baby/baby5",
      "../img/baby/baby6",
      "../img/baby/baby7",
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
      "../img/fam/fam18",
      "../img/fam/fam19",
    ],
  }

  render() {
    return (
      <section id="gallery-container" className="dark-bg">
        <ScrollToTopOnMount />

        <DropMenu />
        <GalleryButtons />

        <Switch>
          <Route exact path="/gallery" render={() => (
            <PicTiles
              pics={this.state.newbornPics} />
          )} />
          <Route path="/gallery/maternity" render={() => (
            <PicTiles
              pics={this.state.maternityPics} />
          )} />
          <Route path="/gallery/newborn" render={() => (
            <PicTiles
              pics={this.state.newbornPics} />
          )} />
          <Route path="/gallery/babies" render={() => (
            <PicTiles
              pics={this.state.babyPics} />
          )} />
          <Route path="/gallery/fam" render={() => (
            <PicTiles
            pics={this.state.famPics} />
          )} />
        </Switch>

      </section>
    );
  }
}

export default MainGallery;
