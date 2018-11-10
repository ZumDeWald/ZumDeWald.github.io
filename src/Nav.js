import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Nav() {
  return (
    <header id="header-nav-container" className="nav-bar-on-load">
      <nav id="nav-bar">
        <LinkSetup activeOnlyWhenExact={true} to="/" label="Home" />
        <LinkSetup  to="/gallery" label="Galleries" />
        <LinkSetup  to="/about" label="About" />
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


//   render() {
//     return (
//       <Menu />
//
// /*
//       // <Router>
//       //   <nav id="nav-bar">
//       //     <h3 id="nav-home" className="nav-item"><Link to="/"
//       //     onClick={(sel)=>{this.currentPageSwitcher(sel)}}
//       //     className="nav-item-selected"
//       //     >Home</Link></h3>
//       //     <h3 id="nav-gallery" className="nav-item"><Link to="/gallery"
//       //     onClick={(sel)=>{this.currentPageSwitcher(sel)}}
//       //     >Galleries</Link></h3>
//       //     <h3 id="nav-about" className="nav-item"><Link to="/about"
//       //     onClick={(sel)=>{this.currentPageSwitcher(sel)}}
//       //     >About</Link></h3>
//       //     <h3 id="nav-pricing" className="nav-item"><Link to="/pricing"
//       //     onClick={(sel)=>{this.currentPageSwitcher(sel)}}>Pricing</Link></h3>
//       //   </nav>
//       // </Router>
// */
//
//
//     );
//   }
// }

export default Nav;
