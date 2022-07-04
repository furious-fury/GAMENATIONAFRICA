import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import ScrollToTop from "react-scroll-to-top";



export default function HeaderTwo() {

  
  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }
      

  },[]);

  useEffect(()=>{
    
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $('.scroll-to-target').removeClass('open');
    
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $('.scroll-to-target').addClass('open');
      }
    });
    
  },[])


  
  return (
	 <header> 
     <ScrollToTop smooth top="500" color="#000"/>
          <div className="header-top-area s-header-top-area d-none d-lg-block">
            <div className="container-fluid s-container-full-padding">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block">
                </div>
                <div className="col-lg-6">
                  <div className="header-top-right">
                    <div className="header-social">
                      <ul>
                        <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="/#"><i className="fab fa-instagram" /></Link></li>
                      </ul>
                    </div>
                    <div className="header-top-action">
                      <ul>
                        <li>
                          <div className="header-top-mail">
                            <p><span>|</span><i className="far fa-envelope" /><Link to="/mailto:contact@gamenationafrica.com">contact@gamenationafrica.com</Link></p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky-header" className="transparent-header menu-area">
            <div className="container-fluid s-container-full-padding">
              <div className="row">
                <div className="col-12">
                <div className="mobile-nav-toggler two"><i className="fas fa-bars" /></div>
                  <div className="main-menu  menu-style-two">
                    <nav>
                      <div className="logo">
                        <Link to="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                      </div>
                      <div className="navbar-wrap push-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li className="show"><Link to="/">Home</Link>
                          </li>
                          <li><Link to="/games">Games</Link>
                          </li>
                          <li><Link to="/about-us">About</Link></li>
                          <li><Link to="/contact">contact</Link></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                
                 <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="/assets/img/logo/logo.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
              </div>
            </div>
          </div>
        </header>
  )
}
