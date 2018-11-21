import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <main id="main-content-container">

        <article className="content-article">
          <img src="./img/StacyPic.jpg" alt="Stacy Thompson" className="info-article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Hello, I'm Stacy!</h3>
            <p className="article-text">
              --- I grew up in St. Louis, Missouri and now call Terre Haute, Indiana home. </p>
            <p className="article-text">
              --- I love Jesus, adoption, oldies but goodies, porch swings, and candy! </p>
            <p className="article-text">
              --- Newborn Photography is my escape from reality for a few hours. Spending my days around brand new life is a blessing to my soul. I honestly can't believe that I get to call it my job! <br /> &nbsp; Along with that comes maternity, babies, and family photography! There are so many different people I get to meet; the mama who is experiencing new life inside her belly, the newborn baby that is so squishy and perfect, the baby that I have gotten to watch grow right in front of my lens, and the family that just needs to capture this moment in time, because they have learned how fast time really goes.  I love and remember them all.
            </p>
          </div>
        </article>

        <article className="display-article">

          <ul className="article-display-area">
            <li id="gb">
              <Link to="/gallery">
                <button id="gallery-button">- Galleries -</button>
              </Link>
            </li>
            <li id="d1" className="display-item">
              <p className="display-item-text">
              Maternity </p> </li>
            <li id="d2" className="display-item">
              <p className="display-item-text">
              Newborn </p> </li>
            <li id="d3" className="display-item">
              <p className="display-item-text">
              Children/Family </p> </li>
            <li id="d4" className="display-item">
              <p className="display-item-text">
              Lifestyle </p> </li>
          </ul>

        </article>

      </main>
    );
  }
}

export default Landing;
