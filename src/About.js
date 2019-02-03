import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ScrollToTopOnMount from './ScrollToTopOnMount.js';
import Contact from './Contact.js';
import FAQ from './FAQ.js';
import Equipment from './Equipment.js';

function AboutChooser() {
  return (
        <div id="gallery-chooser">
          <AboutChoice to="/about/contact" label="Contact" />
          <AboutChoice to="/about/FAQ" label="FAQ" />
          <AboutChoice to="/about/equipment" label="Equipment" />
        </div>
  );
}


function AboutChoice({ label, to }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link to={to}
        id={match ? "gallery-button-current" : ""}
        ><button tabIndex="-1"
        className="gallery-chooser-button">{label}</button></Link>
      )}
    />
  );
}


class About extends Component {

  toggleBox = event => {
    event.target.parentNode.classList.toggle("box-closed");
    event.target.parentNode.classList.toggle("box-open");
    event.target.firstChild.classList.toggle("fa-angle-down");
    event.target.firstChild.classList.toggle("fa-angle-up");
  }


  render() {
    return (
      <section id="about-content-container" className="dark-bg">
        <ScrollToTopOnMount />

        <AboutChooser />

        <Switch>
          <Route exact path='/about'
                 render={(props) => <FAQ handleToggleBox={this.toggleBox} />} />
          <Route path='/about/contact'
                 render={(props) => <Contact handleToggleBox={this.toggleBox} />} />
          <Route exact path='/about/FAQ'
                 render={(props) => <FAQ handleToggleBox={this.toggleBox} />} />
          <Route path='/about/equipment'
                 render={(props) => <Equipment handleToggleBox={this.toggleBox} />} />
        </Switch>
      </section>
    );
  }
}

export default About;
