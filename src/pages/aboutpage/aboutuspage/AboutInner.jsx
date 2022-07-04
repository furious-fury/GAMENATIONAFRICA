import React,{ useEffect } from 'react'
import WOW from "wowjs";

function AboutInner() {
  useEffect(()=>{
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop:Infinity,
    }).init();
  
    },[])
  return (
	<section className="inner-about-area fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="inner-about-img">
                <img src="assets/img/images/inner_about_img01.png" className="wow fadeInRight" data-wow-delay=".3s" alt="" />
                <img src="assets/img/images/inner_about_img02.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" />
                <img src="assets/img/images/inner_about_img03.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three mb-25">
                <h2>About <span>Us</span></h2>
              </div>
              <div className="inner-about-content">
                <p>GameNation has remained committed to uniting gamers across Africa through online gaming and competitive esports. With 2000+ members and 30 staff members, we have created a fun, friendly and homely community for players all over Africa. Players are engaged with over 20 gaming activities and tournaments in different varieties of online games, ranging from online shooters, to Soccer to even Ludo, making sure no one is left out as there is a game type for everyone.</p>
              </div>
              <div className="inner-about-content">
                <h5>Our Mission</h5>
                <p>Our Mission is to provide outstanding experiences to our community, rewarding opportunities for our team, and superior value to the whole of Africa. To be deliver excellent gaming engagements to players across Africa.</p>
              </div>
              <div className="inner-about-content">
                <h5>Our Vision</h5>
                <p>Our Vision is to unite the whole of Africa by leading the gaming community and providing superior esports entertainment value and exceptional experiences to our community and Africa.</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="inner-about-shape"><img src="assets/img/images/medale_shape.png" alt="" /></div>
      </section>
  )
}

export default AboutInner