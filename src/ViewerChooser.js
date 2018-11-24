import React from 'react';
import { Route, Link } from "react-router-dom";


function ViewerChooser() {
  return (
        <div id="gallery-chooser">
          <ViewerChoice to="/gallery/newborn" label="Newborn" />
          <ViewerChoice to="/gallery/maternity" label="Maternity" />
          <ViewerChoice to="/gallery/fam" label="Children/Family" />
          <ViewerChoice to="/gallery/lifestyle" label="Lifestyle" />
        </div>
  );
}


function ViewerChoice({ label, to }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link to={to}
        id={match ? "gallery-button-current" : ""}
        ><button
        className="gallery-chooser-button">{label}</button></Link>
      )}
    />
  );
}

export default ViewerChooser;
