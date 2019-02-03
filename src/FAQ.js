import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = (props) => {

  return (
    <section>
      <h1 className="about-header">FAQ</h1>
      <article className="about-article-area">
        <div className="about-article-box box-closed">
          <div className="about-box-title-box">
            <i className="far fa-question-circle fa-3x about-box-icon"></i>
            <h2 className="about-box-heading main-font-style">What should I expect from my session?</h2>
          </div>
          <h3 className="about-box-sub-header">Each Session</h3>
          <p className="about-box-text">
            My goal on every shoot is to capture true expressions. The sweet little smiles, the tears, the quirky expressions and even the somber faces <em>which are my favorite!</em> </p>
          <p className="about-box-text">
            I will direct some posing, but my goal is to capture <em>personality</em> and <em>natural</em> body language.</p>
          <p className="about-box-text">
            I shoot both on location and have an in home studio. <em>(I <strong>do not do</strong> family sessions at my in home studio)</em> </p>
          <p className="about-box-text">
            An on-location shoot works best either 1-2 hours before sunset or early morning around 8am or 9am depending on the season.</p>
          <p className="about-box-text">
            Please come being prepared to RELAX!  I have Netflix and WiFi. You are welcome to watch the session, but it is not necessary. I actually encourage my parents to sit back and relax. Your baby is in good hands! And what a sweet surprise it will be when you receive your edited images! </p>
          <h3 className="about-box-sub-header">Newborn Specific</h3>
          <p className="about-box-text">
            <strong>For my Newborn Session clients:</strong> you will receive step by step instructions along with a questionaire so your <em>unique, stylized</em> session can be the best experience possible.</p>
          <p className="about-box-text">
            I have absolutely everything needed for a beautifully styled newborn session!  All you have to bring is your new, sweet baby, extra formula if you are bottle feeding, a pacifier, and snacks for yourselves! </p>
          <p className="about-box-text">
          <i className="fas fa-asterisk fa-sm"></i> &nbsp;
          <em>Plan on the session length being at least 2 hours.</em></p>
          <span
            onClick={props.handleToggleBox}
            className="about-box-expand">
            <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
          </span>
        </div>
      </article>

      <article className="about-article-area">
        <div className="about-article-box box-closed">
          <div className="about-box-title-box">
            <i className="far fa-question-circle fa-3x about-box-icon"></i>
            <h2 className="about-box-heading main-font-style">How should I prepare for my session?</h2>
          </div>
          <p className="about-box-text">
            <strong>Clothing</strong> can really make or break a photo shoot, and that is why I can assist you in pulling your wardrobe together.</p>
          <p className="about-box-text">
            Please coordinate! I will absolutely stay true to <em>your style</em> while keeping in mind what looks good on camera.</p>
          <p className="about-box-text">
            I am creating art, and <em>clothing</em> is a tool to make that art come to life.</p>
          <p className="about-box-text">
            During the session, expect to <strong>have fun and be yourself</strong>. I might ask you to do silly or fun things to help break the ice or to create connections with you.</p>
          <span
            onClick={props.handleToggleBox}
            className="about-box-expand">
            <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
          </span>
        </div>
      </article>

      <article className="about-article-area">
        <div className="about-article-box box-closed">
          <div className="about-box-title-box">
            <i className="far fa-question-circle fa-3x about-box-icon"></i>
            <h2 className="about-box-heading main-font-style">What is included in a session?</h2>
          </div>
          <h3 className="about-box-sub-header">Included for each session:</h3>
          <ul className="about-list">
            <li className="about-list-item">Photographer’s time and talent</li>
            <li className="about-list-item">Professionally edited images [ <em>quantity specified per package on the <Link to="/pricing" className="link">Pricing page</Link></em> ]</li>
            <li className="about-list-item">Additional images can be purchased for $20 per image</li>
            <li className="about-list-item">File preparation and an online gallery of images for you to easily share, download, and print. <br />
            &nbsp; - You will have <strong>one month</strong> for viewing from the time the gallery is available.</li>
            <li className="about-list-item">All photos come with print release & lab recommendations.</li>
          </ul>
          <h3 className="about-box-sub-header">Additional considerations:</h3>
          <ul className="about-list">
            <li className="about-list-item"><em>All prints are purchased separately.</em> </li>
            <li className="about-list-item">You can expect your images to be edited 1-2 weeks after session.</li>
            <li className="about-list-item">If you prefer a flash drive with your images one can be purchased for an extra fee.</li>
            <li className="about-list-item">I often share a sneak peak for the family on Facebook within 48 hours of the session. <br /> &nbsp; - <strong>When posting pictures online, I may share baby’s first name and small details like weight and age.</strong> <br />
            &nbsp; - You are welcome to tag and share these photos after 24 hours of me posting them if you would like to.  </li>
          </ul>
          <span
            onClick={props.handleToggleBox}
            className="about-box-expand">
            <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
          </span>
        </div>
      </article>

      <article className="about-article-area">
        <div className="about-article-box box-closed">
          <div className="about-box-title-box">
            <i className="far fa-question-circle fa-3x about-box-icon"></i>
            <h2 className="about-box-heading main-font-style">Payment / Fee information:</h2>
          </div>
          <p className="about-box-text">
            I accept Cash or Pay-Pal </p>
          <p className="about-box-text">
            A deposit [ <em>50% of the session cost</em> ] is due at booking </p>
          <p className="about-box-text">
            The remainder of the session fee [ <em>minus the deposit</em> ] is due at the time of the session </p>
          <p className="about-box-text">
            Session are <em>only</em> booked for weekdays. Should you need a weekend session there is an additional $50 fee</p>
          <p className="about-box-text">
            Travel fee applies on distances greater than 25 miles [ <em>travel fee depends on additional mileage, <Link to="/about/contact" className="link">contact me</Link> for a free estimate.</em> ]</p>
          <p className="about-box-text">
            All payments are non-refundable</p>
          <p className="about-box-text">
            Pricing secured upon booking your session.</p>
          <p className="about-box-text">
            Pricing is non-negotiable</p>
          <span
            onClick={props.handleToggleBox}
            className="about-box-expand">
            <i className="fas fa-angle-down fa-2x prevent-click about-box-icon"></i>
          </span>
        </div>
      </article>
    </section>
  )
}


export default FAQ;
