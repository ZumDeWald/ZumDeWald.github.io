import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DropMenu = (props) => {

  /* React State Hook used to set wether menu is open and provides a method to change the state */
  const [menuOpen, setMenuChange] = useState(false);

  /* Toggles menu state between open and closed. Detailed steps in toggleMenu function below */
  const changeMenuState = () => {
    (!!menuOpen) ?
    toggleMenu("close") :
    toggleMenu("open");
  };

  /* Function to open or close the menu depending on which is passed down from changeMenuState function above. This function handles opening/closing the menu box, displaying/hiding the menu options, and rotating the menu icon (arrow). This also updates the state to reflect that the menu is open or closed, so the above function adapts properly. */
  const toggleMenu = (menuState) => {
    const grabMenu = document.getElementById("dropMenu");
    const grabList = document.getElementsByTagName("ul");
    const grabIcon = document.getElementsByClassName("menu-icon");
    if (menuState === "close") {
      // Steps to CLOSE the menu
      grabMenu.classList.add("closed");
      grabMenu.classList.remove("open");
      grabList[0].classList.add("hidden");
      grabIcon[0].classList.remove("rotate-90");
      setMenuChange(false);
    } else {
      // Steps to OPEN the menu
      grabMenu.classList.remove("closed");
      grabMenu.classList.add("open");
      grabList[0].classList.remove("hidden");
      grabIcon[0].classList.add("rotate-90");
      setMenuChange(true);
    }
  }

  return (
    <section id="dropMenu" className="flex-col-center closed">
      <i className="fas fa-angle-down menu-icon hover-hand"
            onClick={() => {changeMenuState()}}></i>
      <ul className="menu-list hidden">
        <li className="menu-item"
            onClick={() => {changeMenuState()}}>
          <Link to="/gallery/maternity">Maternity</Link>
        </li>
        <li className="menu-item"
            onClick={() => {changeMenuState()}}>
          <Link to="/gallery/newborn">Newborn</Link>
        </li>
        <li className="menu-item"
            onClick={() => {changeMenuState()}}>
          <Link to="/gallery/babies">Babies</Link>
        </li>
        <li className="menu-item"
            onClick={() => {changeMenuState()}}>
          <Link to="/gallery/fam">Family</Link>
        </li>
      </ul>
      <span className="menu-identifier">Choose &nbsp; &nbsp; &nbsp; &nbsp; Gallery</span>
    </section>
  );

}


export default DropMenu;
