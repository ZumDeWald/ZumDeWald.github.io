import React, { Component } from 'react';

import './App.css';

class About extends Component {


  render() {
    return (
      <section id="about-content-container">
      <article className="flex-c-nw content-article about-article-size">
      <div className="about-article-area">
        <h2 className="about-article-heading main-font-style">What to expect from a session:</h2>
        <div>
          <ul className="about-list">
            <li className="about-list-item">
            <p className="about-article-text">&nbsp; My goal on every shoot is to capture true expressions. The sweet little smiles, the tears, the quirky expressions and even the somber faces <em>which are my favorite!</em>
            <br />&nbsp; I shoot both on location and have an in home studio. I do not do family sessions at my in home studio.
            <br />&nbsp;  I will direct some posing, but my goal is to capture personality and natural body language.</p></li>

            <li className="about-list-item">
            <h3 className="about-sub-heading">Atmosphere</h3>
            <p className="about-article-text">&nbsp; For my Newborn Session clients, you will receive step by step instructions on how to prepare your baby for their session.  You will also receive a questionaire so I can better prepare for your unique stylized session. <br />
            During the session, expect to have fun and be yourself. I might ask you to do silly or fun things to help break the ice or to create connections with you.</p></li>

            <li className="about-list-item">
            <h3 className="about-sub-heading">Clothing Choices</h3>
            <p className="about-article-text">&nbsp; Please coordinate! Clothing can really make or break a photo shoot, and that is why I can assist you in pulling your wardrobe together. I will absolutely stay true to your style while keeping in mind what looks good on camera. I am creating art, and clothing is a tool to make that art come to life.</p></li>

            <li className="about-list-item">
            <h3 className="about-sub-heading">Fees</h3>
            <p className="about-article-text">&nbsp; The remainder of the session fee minus the deposit is due at the time of the session by either cash or pay-pal. <br />
            I shoot on location either 1-2 hours before sunset or early morning around 8am or 9am depending on the season.</p></li>

            <li className="about-list-item">
            <h3 className="about-sub-heading">Included With Each Session</h3>
            <ul>
            <li>Photographer’s time and talent</li>
            <li>Professionally edited images</li>
            <li>File preparation, and an online gallery of images for you to easily share with family & friends as well as downloading and printing. [ <em>You will have one month for viewing from the time the gallery is available.</em> ]</li>
            <li>All photos come with print release & lab recommendations.</li>
            <li>All prints are purchased separately. </li>
            <li>You can expect your images to be edited between 1-2 weeks.</li>
            <li>If you prefer a flash drive with your images one can be purchased for an extra fee.</li>
            <li>I often share a sneak peak for the family on Facebook within 48 hours of the session. <strong>When posting pictures online, I may share baby’s first name and small details like weight and age.</strong> You are welcome to tag and share these photos after 24 hours of me posting them if you would like to.  </li>
            </ul></li>
          </ul>
        </div>
      </div>
      </article>
      </section>
    );
  }
}

export default About;
