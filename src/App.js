import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav.js'
import HeroArea from './HeroArea.js';
import Landing from './Landing.js';
import MainGallery from './MainGallery.js';
import About from './About.js';
import Pricing from './Pricing.js';

import './stylesheets/App.css';
import './stylesheets/Nav.css';
import './stylesheets/Hero.css';
import './stylesheets/Landing.css';
import './stylesheets/Gallery.css';
import './stylesheets/About.css';
import './stylesheets/Pricing.css';
import './stylesheets/Footer.css';

class App extends Component {

  scrollChanges = () => {
    let scrollAmount = ((document.body.scrollTop + document.documentElement.scrollTop));
    const navBar = document.getElementById("header-nav-container");

    //Opacity change for Nav Menu
    if (scrollAmount > 500) {
      navBar.classList.add("nav-bar-on-scroll");
      navBar.classList.remove("nav-bar-on-load");
    } else {
      navBar.classList.add("nav-bar-on-load");
      navBar.classList.remove("nav-bar-on-scroll");
    }
  }


  componentDidMount () {
    //Set scroll event on Hero
    window.addEventListener('scroll', this.scrollChanges);
  }


  render() {
    return (
      <div id="top-level-container">

        <Nav />

        <HeroArea />

        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/gallery" component={MainGallery} />

          <Route path="/about" component={About} />

          <Route path="/pricing" component={Pricing} />
        </Switch>

        <footer id="footer-container">
          <section id="footer">
            <p className="footer-text">&copy; 2018 STPhotography |&nbsp;
            </p>
            <a href="https://www.facebook.com/stacythompsonphotography" target="_blank" rel="noopener noreferrer">
              <i id="fb-icon" className="fab fa-facebook fa-lg social-icon"></i> </a>
            <a href="https://www.pinterest.com/stacythompsonph/" target="_blank" rel="noopener noreferrer">
              <i id="pin-icon" className="fab fa-pinterest fa-lg social-icon"></i> </a>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;
