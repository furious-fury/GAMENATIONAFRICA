import React from 'react'
import {Link} from 'react-router-dom'


function CtaArea() {


  
  return (
	<section className="cta-area cta-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-6">
                  <div className="cta-img">
                    <img src="https://fieryper.sirv.com/gamenation/images/cta_img.png?format=webp&webp.fallback=png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-content">
                    <div className="cta-icon mb-15">
                      <img src="https://fieryper.sirv.com/gamenation/icon/cta_icon.png?format=webp&webp.fallback=png" alt="" />
                    </div>
                    <div className="section-title title-style-three white-title mb-50">
                      <h2>WORLDS MEET <span>Real</span></h2>
                      <p>Compete with 100 player on a remote island for winner
                        known issue where certain strategic</p>
                    </div>
                    <div className="cta-btn">
                      <Link to="/#" className="btn btn-style-two">VIEW SCHEDULE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default CtaArea