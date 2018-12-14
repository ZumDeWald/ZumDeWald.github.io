import React, { Component } from 'react';

import ScrollToTopOnMount from './ScrollToTopOnMount.js';

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
      <ScrollToTopOnMount />

      {/* Referral button */}
      <aside id="pricing-referral-aside">
        <button id="referral-button"
        onClick= {()=>{this.openReferralModal()}} >
          Checkout my Referral Program!
        </button>
      </aside>

      {/* Referral Popup Modal - Hidden by default */}
      <div id="referral-popup-container" className="hide">
        <div id="referral-popup-modal">
          <i className="far fa-times-circle" id="referral-close"
          onClick= {()=>{this.closeReferralModal()}} ></i>
          <i className="far fa-handshake fa-4x"></i>
          <p className="about-article-text">
           As a small business owner, word-of-mouth is one of my most beneficial forms of advertisement. Thank you so much for spreading the word about my business, it is because of customers like <em>YOU</em> that Stacy Thompson Photography is thriving! </p>
          <p className="about-article-text">
            I am happy to announce customers who have booked & completed a session with me will recieve the following credits when they refer a new customer: </p>
              <ul>
                <li>$10 (Referral Books Full Session)*</li>
                <li>$20 (Referral Books Deluxe Newborn)*</li>
              </ul>
          <p className="popup-modal-note">
           <em>*Referred customer must <strong>book & complete</strong> session for credit to apply. Credit applied to any future sessions booked.</em> </p>
        </div>
      </div>

      {/* Main Content for Pricing Page */}
      <p className="pricing-note">
        <i className="fas fa-asterisk fa-sm"></i>
        <em> Prints larger than an 8x10 should be ordered through me </em></p>

      {/* Maternity Section */}
        <article className="content-article top-spacer dark-bg">
          <img src="./img/STP5.jpg" alt="Maternity" className="article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading">Maternity Session - $175</h3>
            <div className="article-text">
              <ul>
                <li>30 minute session</li>
                <li>2 outfits</li>
                <li>7 edited images available for download from your online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
        </article>

      {/* Newborn Section */}
        <article className="content-article">
          <div className="article-text-area">
            <h3 className="article-heading article-heading-l">Simply Newborn - $250</h3>
            <div className="article-text">
              <ul>
                <li>baby only session</li>
                <li>10 edited images available for download from your online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
          <div className="article-text-area">
            <h3 className="article-heading article-heading-l">Deluxe Newborn/ <br />Family - $375</h3>
            <div className="article-text">
              <ul>
                <li>baby and family session</li>
                <li>up to 20 edited images available for download from your online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
          <img src="./img/STP7.jpg" alt="Newborn" className="article-pic-right" />
        </article>

      {/* Children/Family Section */}
        <article className="content-article dark-bg">
          <img src="./img/STP2.jpg" alt="Children/Family" className="article-pic" />
          <div className="article-text-area">
            <h3 className="article-heading">Milestone Session - $130</h3>
            <div className="article-text">
              <ul>
                <li>7 edited images available for download from your online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
          <div className="article-text-area">
            <h3 className="article-heading">One Year Session - $200</h3>
            <div className="article-text">
              <ul>
                <li>15 edited images available for download from your online gallery.</li>
                <li>an online gallery for viewing images and ordering prints</li>
              </ul>
            </div>
          </div>
        </article>

      {/* Disclaimers / Notes Section */}
        <article className="content-article">
          <div className="article-text-area">
            <h3 className="article-heading article-heading-l">Disclaimers / Notes</h3>
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
          <article className="content-article dark-bg">
            <img src="./img/STP4.jpg" alt="Children/Family" className="article-pic" />
            <div>
              <p className="pricing-disclaimer-note">
               Stacy Thompson Photography is serving the Wabash Valley and surrounding counties. Book your session as early as possible.  To reserve your session, a 50% deposit of the session price is required (the deposit fee comes out of the session price). The remaining balance is due the day of the session using CASH or PAY-PAL. </p>
               <p className="pricing-disclaimer-note">
               <em>All payments are non-refundable.</em> You secure pricing and services when you book your session. Pricing is non-negotiable.  All prices are subject to change at any time, without notice. If they change, I will honor the prices at the time of your booking. </p>
               <p className="pricing-disclaimer-note">
               Stacy Thompson Photography is available to travel nationwide and worldwide. A travel fee applies on distances greater than 25 miles.
              </p>
            </div>
          </article>

      </section>
    );
  }
}

export default Pricing;
