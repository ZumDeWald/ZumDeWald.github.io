import React, { Component } from 'react';

import './App.css';

class Pricing extends Component {
  render() {
    return (
      <section id="pricing-content-container">

      <p className="pricing-note main-font-style">[[<em> * Prints larger than an 8x10 should be ordered through me * </em>]]</p>

      {/* Maternity Section */}
        <article className="content-article">
          <img src="./img/STP5.jpg" alt="Maternity" className="article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Maternity Mini Session - $175</h3>
            <div className="article-text">
              <strong>Includes:</strong>
              <ul>
                <li>30 minute session</li>
                <li>2 outfits</li>
                <li>7 edited images available for download from the online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
        </article>

      {/* Newborn Section */}
        <article className="content-article article-align-right">
        <div className="article-text-area">
          <h3 className="article-heading main-font-style">Simply Newborn - $250</h3>
          <div className="article-text">
            <strong>Includes:</strong>
            <ul>
              <li>baby only session</li>
              <li>10 edited images available for download from the online gallery.</li>
              <li>an online gallery for viewing images and ordering prints</li>
            </ul>
          </div>
        </div>
        <div className="article-text-area">
          <h3 className="article-heading main-font-style">Deluxe Newborn/Family - $375</h3>
          <div className="article-text">
            <strong>Includes:</strong>
            <ul>
              <li>baby and family session</li>
              <li>up to 20 edited images available for download from the online gallery.</li>
              <li>an online gallery for viewing images and ordering prints</li>
            </ul>
          </div>
        </div>
          <img src="./img/STP7.jpg" alt="Newborn" className="article-pic-right" />
        </article>

      {/* Children/Family Section */}
        <article className="content-article">
          <img src="./img/STP2.jpg" alt="Children/Family" className="article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Mini / Milestone Session - $130</h3>
            <div className="article-text">
              <strong>Includes:</strong>
              <ul>
                <li>7 edited images available for download from the online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">One Year Session - $200</h3>
            <div className="article-text">
              <strong>Includes:</strong>
              <ul>
                <li>15 edited images available for download from the online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
        </article>

      {/* Disclaimers / Notes Section */}
        <article className="content-article article-align-right">
          <div className="article-text-area">
            <h3 className="article-heading main-font-style">Disclaimers / Notes</h3>
              <ul className="article-text">
                <li>Sessions are <em>only</em> done on week days. If you need to schedule a weekend session there will be an additional $50 fee.</li>
                <li>Sessions <strong>Do Not</strong> include images on CD. Instead they are available for download from your online gallery. [see next item]</li>
                <li>A custom USB Flashdrive with your session images can be purchased for $30.</li>
                <li>Additional images can be purchased for $20/per image.</li>
              </ul>
            </div>
          <img src="./img/STP6.jpg" alt="Lifestyle" className="article-pic-right" />
        </article>

        {/* Booking Disclaimer Section */}
          <article className="content-article">
            <img src="./img/STP4.jpg" alt="Children/Family" className="article-pic" />
            <p className = "pricing-disclaimer-note">
              &nbsp; Stacy Thompson Photography is serving the Wabash Valley and surrounding counties. Book your session as early as possible.  To reserve your session, a 50% deposit of the session price is required (the deposit fee comes out of the session price). The remaining balance is due the day of the session using CASH or PAY-PAL. <br /> <br />
              &nbsp; <em>All payments are non-refundable.</em> You secure pricing and services when you book your session. Pricing is non-negotiable.  All prices are subject to change at any time, without notice. If they change, I will honor the prices at the time of your booking. <br /> <br />
              &nbsp; Stacy Thompson Photography is available to travel nationwide and worldwide. A travel fee applies on distances greater than 25 miles.
            </p>
          </article>

      </section>
    );
  }
}

export default Pricing;
