import React from 'react';

function Footer() {
  return (
	   <footer>
        <div className="footer-top footer-bg">
          {/* newsletter-area */}
          <div className="newsletter-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="newsletter-wrap">
                    <div className="section-title newsletter-title">
                      <h2>Our <span>Newsletter</span></h2>
                    </div>
                    <div className="newsletter-form">
                      <form>
                        <div className="newsletter-form-grp">
                          <i className="far fa-envelope" />
                          <input type="email" placeholder="Enter your email..." />
                        </div>
                        <button>SUBSCRIBE <i className="fas fa-paper-plane" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* newsletter-area-end */}
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="footer-logo mb-35">
                    <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                  <div className="footer-text">
                    <div className="footer-contact">
                      <ul>
                        <li><i className="fas fa-map-marker-alt" /> <span>Address : </span>42 Adisa Bashua street, Surelere, Lagos</li>
                        <li><i className="fas fa-headphones" /> <span>Phone : </span>+234 907 748 7598, +234 815 404 4195</li>
                        <li><i className="fas fa-envelope-open" /><span>Email : </span>contact@gamenationafrica.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Need Help?</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li><a  href="/#">Terms &amp; Conditions</a></li>
                      <li><a  href="/#">Privacy Policy</a></li>
                      <li><a  href="/#">Refund Policy</a></li>
                      <li><a  href="/#">Affiliate</a></li>
                      <li><a  href="/#">FAQUse Cases</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Follow us</h5>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li><a  href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a  href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a  href="/#"><i className="fab fa-pinterest-p" /></a></li>
                      <li><a  href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-fire"><img src="assets/img/images/footer_fire.png" alt="" /></div>
          <div className="footer-fire footer-fire-right"><img src="assets/img/images/footer_fire.png" alt="" /></div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © {new Date().getFullYear()} | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
