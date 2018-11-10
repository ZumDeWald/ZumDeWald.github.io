import React, { Component } from 'react';

class Pricing extends Component {

  //Modal open and close methods
openReferralModal = () => {
  let modal = document.getElementById("referral-popup-container");
  modal.classList.remove("hide");
  modal.classList.add("flex-c-nw");
}

closeReferralModal = () => {
  let modal = document.getElementById("referral-popup-container");
  modal.classList.remove("flex-c-nw");
  modal.classList.add("hide");
}


  render() {
    return (
      <section id="pricing-content-container">

      {/* Referral button */}
      <aside id="pricing-referral-aside">
        <button id="referral-button"
        onClick= {()=>{this.openReferralModal()}} >
          Checkout my <br />
          Referral Program!
        </button>
      </aside>

      {/* Referral Popup Modal - Hidden by default */}
      <div id="referral-popup-container" className="hide">
        <div id="referral-popup-modal">
          <i className="far fa-times-circle" id="referral-close"
          onClick= {()=>{this.closeReferralModal()}} ></i>
          <i className="far fa-handshake fa-4x referral-icon"></i>
          <p className="article-text">
            &nbsp; As a small business owner, word-of-mouth is one of my most important and beneficial forms of advertisement. Thank you so much for spreading the word about my business. It is because of customers like YOU that Stacy Thompson Photography is thriving! <br /> <br />
            &nbsp; To express my gratitude for my customers, I am happy to announce that Stacy Thompson Photography has implemented a new Customer Referral Program! This offer is available to customers who have booked & completed a session. For every client you refer that books & completes a session, you will receive $10 off if they book & complete any full session, or $20 off if they book and complete a Delux Newborn Session.
          </p>
        </div>
      </div>

      {/* Main Content for Pricing Page */}
      <p className="pricing-note main-font-style">[[<em> * Prints larger than an 8x10 should be ordered through me * </em>]]</p>

      {/* Maternity Section */}
        <article className="content-article pricing-article-size">
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
        <article className="content-article pricing-article-size article-align-right">
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
        <article className="content-article pricing-article-size">
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
        <article className="content-article pricing-article-size article-align-right">
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
          <article className="content-article pricing-article-size">
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
