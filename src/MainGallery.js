import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ViewerChooser from './ViewerChooser.js';
import Viewer from './Viewer.js';

class MainGallery extends Component {

  state = {
    newbornPics: [
      "../img/STP1.jpg",
      "../img/STP2.jpg",
      "../img/STP3.jpg",
      "../img/STP4.jpg",
      "../img/STP5.jpg",
      "../img/STP6.jpg",
      "../img/STP7.jpg",
    ],
    maternityPics: [
      "../img/STP7.jpg",
      "../img/STP6.jpg",
      "../img/STP5.jpg",
      "../img/STP4.jpg",
      "../img/STP3.jpg",
      "../img/STP2.jpg",
      "../img/STP1.jpg",
    ],
    famPics: [
      "../img/STP4.jpg",
      "../img/STP5.jpg",
      "../img/STP6.jpg",
      "../img/STP1.jpg",
      "../img/STP2.jpg",
      "../img/STP3.jpg",
      "../img/STP7.jpg",
    ],
    lifestylePics: [
      "../img/STP2.jpg",
      "../img/STP3.jpg",
      "../img/STP1.jpg",
      "../img/STP4.jpg",
      "../img/STP5.jpg",
      "../img/STP7.jpg",
      "../img/STP6.jpg",
    ],
  }

  render() {
    return (
      <section id="gallery-container">

        <ViewerChooser />

        <Switch>
          <Route exact path="/gallery" render={() => (
            <Viewer
              pics={this.state.newbornPics} />
          )} />
          <Route path="/gallery/newborn" render={() => (
            <Viewer
              pics={this.state.newbornPics} />
          )} />
          <Route path="/gallery/maternity" render={() => (
            <Viewer
              pics={this.state.maternityPics} />
          )} />
          <Route path="/gallery/fam" render={() => (
            <Viewer
            pics={this.state.famPics} />
          )} />
          <Route path="/gallery/lifestyle" render={() => (
            <Viewer
            pics={this.state.lifestylePics} />
          )} />
        </Switch>

      </section>
    );
  }
}

export default MainGallery;
