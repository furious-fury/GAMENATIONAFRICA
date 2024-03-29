import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
function NewGamesArea() {
 
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;


  useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
  return (
  
	<section className="released-games-area gray-bg pt-115 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-20">
                    <h2>RECENT <span>EVENTS</span></h2>
                    <p>Limited slots availaible for each event, hurry up and join now. Go in guns blazing !!</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12">
                  <Slider className="released-game-active"
                  asNavFor={nav2}
                  ref={slider => (slider1 = slider)}
                  arrows={false}
                  >
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="https://fieryper.sirv.com/gamenation/images/released_game_img01.jpg?format=webp&webp.fallback=png" alt="" />
                        </div>
                        <div className="released-game-content">
                          <h4>APEX <span>LEGENDS</span></h4>
                          <div className="released-game-list mb-15">
                          <ul>
                              <li><span>Prize :</span>$500</li>
                              <li><span>Category :</span>First Person Shooter</li>
                              <li><span>Device :</span>PC / XBOX / PLAYSTATION</li>
                              <li><span>Size :</span>Compete against 100 players</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">join now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="https://fieryper.sirv.com/gamenation/images/released_game_img02.jpg?format=webp&webp.fallback=png" alt="" />
                        </div>
                        <div className="released-game-content">
                          <h4>PUBG <span>MOBILE</span></h4>
                          <div className="released-game-list mb-15">
                          <ul>
                              <li><span>Prize :</span>$500</li>
                              <li><span>Category :</span>First Person Shooter</li>
                              <li><span>Device :</span>PC / XBOX / PLAYSTATION</li>
                              <li><span>Size :</span>Compete against 100 players</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">Join Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="https://fieryper.sirv.com/gamenation/images/released_game_img03.jpg?format=webp&webp.fallback=png" alt="" />
                        </div>
                        <div className="released-game-content">
                          <h4>CALL <span>OF DUTY</span></h4>
                          <div className="released-game-list mb-15">
                          <ul>
                              <li><span>Prize :</span>$500</li>
                              <li><span>Category :</span>First Person Shooter</li>
                              <li><span>Device :</span>PC / XBOX / PLAYSTATION</li>
                              <li><span>Size :</span>Compete against 100 players</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">join now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img src="https://fieryper.sirv.com/gamenation/images/released_game_img04.jpg?format=webp&webp.fallback=png" alt="" />
                        </div>
                        <div className="released-game-content">
                          <h4>VAL<span>ORANT</span></h4>
                          <div className="released-game-list mb-15">
                          <ul>
                              <li><span>Prize :</span>$500</li>
                              <li><span>Category :</span>First Person Shooter</li>
                              <li><span>Device :</span>PC / XBOX / PLAYSTATION</li>
                              <li><span>Size :</span>Compete against 100 players</li>
                            </ul>
                          </div>
                          <p>Compete with 100 players on a remote thats island for winner takes showdown known issue</p>
                          <Link to="/#" className="btn btn-style-two">join now</Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <Slider className="released-game-nav" 
                  asNavFor={nav1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  ref={slider => (slider2 = slider)} slidesToShow={3} vertical={true} arrows={false} >
                    <div className="released-game-nav-item">
                      <img src="https://fieryper.sirv.com/gamenation/images/release_game_nav01.jpg?format=webp&webp.fallback=png" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="https://fieryper.sirv.com/gamenation/images/release_game_nav02.jpg?format=webp&webp.fallback=png" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="https://fieryper.sirv.com/gamenation/images/release_game_nav03.jpg?format=webp&webp.fallback=png" alt="" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src="https://fieryper.sirv.com/gamenation/images/release_game_nav04.jpg?format=webp&webp.fallback=png" alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
  )
}

export default NewGamesArea