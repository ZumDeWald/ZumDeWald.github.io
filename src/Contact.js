import React from 'react'

const Contact = (props) => {

  return (
    <section className="flex-c-nw">
      <h1 className="about-header">Contact Me</h1>
        <div className="contact-area">
          <img src="../img/StacyPic.jpg" alt="Stacy Thompson" className="contact-pic" />
          <article className="about-article-area contact-box-size">
            <div className="about-article-box">
              <h3 className="about-box-sub-header">Email: stacythompsonphotography@gmail.com</h3>
              <h3 className="about-box-sub-header">Socials:
                <a href="https://www.facebook.com/stacythompsonphotography" target="_blank" rel="noopener noreferrer">
                  <i id="fb-icon" className="fab fa-facebook fa-lg social-icon"></i> </a>
                <a href="https://www.pinterest.com/stacythompsonph/" target="_blank" rel="noopener noreferrer">
                  <i id="pin-icon" className="fab fa-pinterest fa-lg social-icon"></i> </a>
              </h3>
            </div>
          </article>
        </div>
    </section>
  )
}


export default Contact;
