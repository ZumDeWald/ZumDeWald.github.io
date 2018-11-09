import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import HeroArea from './HeroArea.js';
import ContentArea from './ContentArea.js';
import MainGallery from './MainGallery.js';
import About from './About.js';
import Pricing from './Pricing.js';


import './App.css';

class App extends Component {

  state: {
    pages: []
  }

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

  //Current Page Indicator change function
  currentPageSwitcher = (sel) => {
    let element = document.getElementsByClassName("nav-item-selected");
    element[0].classList.remove("nav-item-selected");
    sel.target.classList.add("nav-item-selected")
  }


  componentDidMount () {
    //Set scroll event on Hero
    window.addEventListener('scroll', this.scrollChanges);
  }


  render() {
    return (
      <div id="top-level-container">
        <header id="header-nav-container" className="nav-bar-on-load">
          <nav id="nav-bar">
            <h3 id="nav-home" className="nav-item"><Link to="/"
            onClick={(sel)=>{this.currentPageSwitcher(sel)}}
            className="nav-item-selected"
            >Home</Link></h3>
            <h3 id="nav-gallery" className="nav-item"><Link to="/gallery"
            onClick={(sel)=>{this.currentPageSwitcher(sel)}}
            >Galleries</Link></h3>
            <h3 id="nav-about" className="nav-item"><Link to="/about"
            onClick={(sel)=>{this.currentPageSwitcher(sel)}}
            >About</Link></h3>
            <h3 id="nav-pricing" className="nav-item"><Link to="/pricing"
            onClick={(sel)=>{this.currentPageSwitcher(sel)}}
            >Pricing</Link></h3>
          </nav>
        </header>

        <HeroArea />

        <Route exact path='/' render={() => (
          <ContentArea  />
        )} />

        <Route exact path="/gallery" render={() => (
          <MainGallery />
        )} />

        <Route exact path="/about" render={() => (
          <About />
        )} />

        <Route exact path="/pricing" render={() => (
          <Pricing />
        )} />

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
