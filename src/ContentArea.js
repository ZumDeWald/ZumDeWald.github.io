import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class ContentArea extends Component {
  render() {
    return (
      <main id="main-content-container">

        <article className="content-article">
          <img src="./img/StacyPic.jpg" alt="Stacy Thompson" className="info-article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Hello, I'm Stacy!</h3>
            <p className="article-text">
              --- I grew up in St. Louis, Missouri and now call Terre Haute, Indiana home. <br /> <br />
              --- I love Jesus, adoption, oldies but goodies, porch swings, and candy! <br /> <br />
              --- I am a Newborn Photographer.  Newborn Photography is my escape from reality for a few hours.  Spending my days around brand new life is a blessing to my soul.  I love it and honestly can't believe that I get to call it my job!  Along with that comes maternity, babies, and family photography!  There are so many different people I get to meet; the mama who is experiencing new life inside her belly, the newborn baby that is so squishy and perfect, the baby that I have gotten to watch grow right in front of my lens, and the family that just needs to capture this moment in time, because they have learned how fast time really goes.  I love and remember them all.
            </p>
          </div>
        </article>

        <article className="content-article display-article">
          <h3 className="display-heading main-font-style">Photography Styles</h3>
          <ul className="article-display-area">
            <li className="display-item">
            <img src="./img/STP5.jpg" alt="Stacy Thompson" className="display-pic" /> <br />
            Maternity </li>
            <li className="display-item">
            <img src="./img/STP7.jpg" alt="Stacy Thompson" className="display-pic" /> <br />
            Newborn </li>
          </ul>

          <ul className="article-display-area">
            <li className="display-item">
            <img src="./img/STP2.jpg" alt="Stacy Thompson" className="display-pic" /> <br />
            Children/Family </li>
            <li className="display-item">
            <img src="./img/STP6.jpg" alt="Stacy Thompson" className="display-pic" /> <br />
            Lifestyle </li>
          </ul>

          <Link to="/gallery">
            <button className="gallery-button main-font-style">- Visit My Gallery -</button>
          </Link>
        </article>

        <article className="content-article article-align-right">
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Hello, I'm Stacy!</h3>
            <p className="article-text">
              --- I grew up in St. Louis, Missouri and now call Terre Haute, Indiana home. <br /> <br />
              --- I love Jesus, adoption, oldies but goodies, porch swings, and candy! <br /> <br />
              --- I am a Newborn Photographer.  Newborn Photography is my escape from reality for a few hours.  Spending my days around brand new life is a blessing to my soul.  I love it and honestly can't believe that I get to call it my job!  Along with that comes maternity, babies, and family photography!  There are so many different people I get to meet; the mama who is experiencing new life inside her belly, the newborn baby that is so squishy and perfect, the baby that I have gotten to watch grow right in front of my lens, and the family that just needs to capture this moment in time, because they have learned how fast time really goes.  I love and remember them all.
            </p>
          </div>
          <img src="./img/StacyPic.jpg" alt="Stacy Thompson" className="article-pic-right" />
        </article>

      </main>
    );
  }
}

export default ContentArea;
