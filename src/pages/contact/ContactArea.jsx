import React from 'react';
import Map from './map';

function ContactArea() {

  return (
	<section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Map/>
            </div>
            <div className="col-lg-6 pl-45">
              <div className="section-title title-style-three mb-20">
                <h2>FOR MORE INFO? <span>CONTACT US</span></h2>
              </div>
              <div className="contact-info-list mb-40">
                <ul>
                  <li><i className="fas fa-map-marker-alt" />42 Adisa Bashua street, Surelere. Lagos, Nigeria</li>
                  <li><i className="fas fa-envelope" />contact@gamenationafrica.com</li>
                </ul>
              </div>
              <div className="contact-form">
                <form>
                  <textarea name="message" id="message" placeholder="Write Message..." defaultValue={""} />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Mail" />
                    </div>
                  </div>
                  <button>SUBMIT MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactArea