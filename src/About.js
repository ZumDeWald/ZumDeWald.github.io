import React, { Component } from 'react';

import ScrollToTopOnMount from './ScrollToTopOnMount.js';


class About extends Component {

  toggleAboutBox = event => {
    event.target.parentNode.classList.toggle("box-closed");
    event.target.parentNode.classList.toggle("box-open");
    event.target.firstChild.classList.toggle("fa-angle-down");
    event.target.firstChild.classList.toggle("fa-angle-up");
  }


  render() {
    return (
      <section id="about-content-container" className="dark-bg">
      <ScrollToTopOnMount />
      <article className="about-article-area">
        <h1 className="about-faq">FAQ</h1>
        <div className="about-article-box box-closed">
          <div className="about-box-title-box">
            <i className="far fa-question-circle fa-3x about-box-icon"></i>
            <h2 className="about-box-heading main-font-style">What should I expect from my session?</h2>
          </div>
          <p className="about-box-text">
            My goal on every shoot is to capture true expressions. The sweet little smiles, the tears, the quirky expressions and even the somber faces <em>which are my favorite!</em> </p>
          <p className="about-box-text">
            I shoot both on location and have an in home studio. I do not do family sessions at my in home studio. </p>
          <p className="about-box-text">
            I will direct some posing, but my goal is to capture personality and natural body language.</p>
            <p className="about-box-text">
              I shoot on location either 1-2 hours before sunset or early morning around 8am or 9am depending on the season.</p>

        <h3 className="about-box-sub-header">Newborn Specific</h3>

          <p className="about-box-text">
            For my Newborn Session clients, you will receive step by step instructions on how to prepare your baby for their session.  You will also receive a questionaire so I can better prepare for your unique stylized session. </p>
          <p className="about-box-text">
            I have absolutely everything needed for a beautifully styled newborn session!  All you have to bring is your new, sweet baby, extra formula if you are bottle feeding, a pacifier, and snacks for yourselves! </p>
          <p className="about-box-text">
            Please come being prepared to RELAX!  I have Netflix and WiFi. You are welcome to watch the session, but it is not necessary. I actually encourage my parents to sit back and relax. Your baby is in good hands! And what a sweet surprise it will be when you receive your edited images! </p>
          <p className="about-box-text">
            An informational sheet will be e-mailed to you, so you know how to best prepare your newborn for a great session.  Yes, there are actually things you can do they day of the session to help prepare your little one to be calm, sleepy, and ready! </p>
          <p className="about-box-text">
            I will also send you a questionnaire so I can better prepare for your little ones uniquely styled session. </p>
          <p className="about-box-text">
          <i className="fas fa-asterisk fa-sm"></i> &nbsp;
          <em>Plan on the session length being at least 2 hours.</em></p>
            <span
              onClick={this.toggleAboutBox}
              className="about-box-expand">
              <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
            </span>
          </div>

          <div className="about-article-box box-closed">
            <div className="about-box-title-box">
              <i className="far fa-question-circle fa-3x about-box-icon"></i>
              <h2 className="about-box-heading main-font-style">How should I prepare for my session?</h2>
            </div>

            <p className="about-box-text">
              Please coordinate! Clothing can really make or break a photo shoot, and that is why I can assist you in pulling your wardrobe together. I will absolutely stay true to your style while keeping in mind what looks good on camera. I am creating art, and clothing is a tool to make that art come to life.</p>
            <p className="about-box-text">
              During the session, expect to have fun and be yourself. I might ask you to do silly or fun things to help break the ice or to create connections with you.</p>
            <p className="about-box-text">
              Please come being prepared to RELAX!  I have Netflix and WiFi. You are welcome to watch the session, but it is not necessary. I actually encourage my parents to sit back and relax. Your baby is in good hands! And what a sweet surprise it will be when you receive your edited images! </p>
              <span
                onClick={this.toggleAboutBox}
                className="about-box-expand">
                <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
              </span>
            </div>

            <div className="about-article-box box-closed">
              <div className="about-box-title-box">
                <i className="far fa-question-circle fa-3x about-box-icon"></i>
                <h2 className="about-box-heading main-font-style">What is included in a session?</h2>
              </div>

              <h3 className="about-box-sub-header">Included for each session:</h3>

              <ul>
                <li>Photographer’s time and talent</li>
                <li>Professionally edited images</li>
                <li>File preparation, and an online gallery of images for you to easily share with family & friends as well as downloading and printing. [ <em>You will have one month for viewing from the time the gallery is available.</em> ]</li>
                <li>All photos come with print release & lab recommendations.</li>
                <li>All prints are purchased separately. </li>
                <li>You can expect your images to be edited between 1-2 weeks.</li>
                <li>If you prefer a flash drive with your images one can be purchased for an extra fee.</li>
                <li>I often share a sneak peak for the family on Facebook within 48 hours of the session. <strong>When posting pictures online, I may share baby’s first name and small details like weight and age.</strong> You are welcome to tag and share these photos after 24 hours of me posting them if you would like to.  </li>
              </ul>
              <span
                onClick={this.toggleAboutBox}
                className="about-box-expand">
                <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
              </span>
            </div>

            <div className="about-article-box box-closed">
              <div className="about-box-title-box">
                <i className="far fa-question-circle fa-3x about-box-icon"></i>
                <h2 className="about-box-heading main-font-style">How are payments handled?</h2>
              </div>

              <p className="about-box-text">
                The remainder of the session fee minus the deposit is due at the time of the session by either cash or pay-pal. </p>
              <p className="about-box-text">
                During the session, expect to have fun and be yourself. I might ask you to do silly or fun things to help break the ice or to create connections with you.</p>
              <p className="about-box-text">
                Please come being prepared to RELAX!  I have Netflix and WiFi. You are welcome to watch the session, but it is not necessary. I actually encourage my parents to sit back and relax. Your baby is in good hands! And what a sweet surprise it will be when you receive your edited images! </p>

          <span
            onClick={this.toggleAboutBox}
            className="about-box-expand">
            <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
          </span>
        </div>

      </article>
      </section>
    );
  }
}

export default About;
