import React from 'react';
import { Route, Link } from "react-router-dom";


function Nav() {
  return (
    <header id="header-nav-container" className="nav-bar-on-load">
      <nav id="nav-bar">
        <LinkSetup activeOnlyWhenExact={true} to="/" label="Home" />
        <LinkSetup  to="/gallery" label="Galleries" />
        <LinkSetup  to="/about/FAQ" label="About" />
        <LinkSetup  to="/pricing" label="Pricing" />
      </nav>
    </header>
  );
}


function LinkSetup({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <h3
        className="nav-item"><Link to={to}
        className={match ? "nav-item-selected" : ""}
        >{label}</Link></h3>
      )}
    />
  );
}

export default Nav;
