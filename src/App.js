import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav.js'
import HeroArea from './HeroArea.js';
import ContentArea from './ContentArea.js';
import MainGallery from './MainGallery.js';
import About from './About.js';
import Pricing from './Pricing.js';


import './App.css';

class App extends Component {

  scrollChanges = () => {
    let scrollAmount = ((document.body.scrollTop + document.documentElement.scrollTop));
    const navBar = document.getElementById("header-nav-container");

    //Opacity change for Nav Menu
    if (scrollAmount > 50) {
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

        <Route exact path='/' component={ContentArea} />

        <Route exact path="/gallery" component={MainGallery} />

        <Route exact path="/about" component={About} />

        <Route exact path="/pricing" component={Pricing} />

        <footer id="footer-container">
          <section id="footer">
            <p className="main-font-style footer-text">&copy; 2018 STPhotography |&nbsp;
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
