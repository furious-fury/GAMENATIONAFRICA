import React from 'react'

function SingleArea({name, rating, platform, genre, desc}) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date()
  const Dates = date.toLocaleString('default', options);

  return (
	<section className="game-single-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="game-single-content">
                <div className="upcoming-game-head">
                  <div className="uc-game-head-title">
                    <span>{Dates}</span>
                    <h4>{name}</h4>
                  </div>
                </div>
                <p>{desc}</p>
                <div className="game-single-img">
                  <div className="row">
                    <div className="col-sm-6">
                      <img src="/assets/img/images/game_single_img01.jpg" alt="" />
                    </div>
                    <div className="col-sm-6">
                      <img src="/assets/img/images/game_single_img02.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
                  nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum.
                  Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec
                  non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis
                  ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
                <div className="game-single-title mt-60 mb-30">
                  <h4>About The Game</h4>
                </div>
                <div className="game-single-info mb-65">
                  <ul>
                    <li><span>Genre :</span> {genre}</li>
                    <li><span>Platform :</span> {platform}</li>
                    <li><span>Multi player :</span> Games Controller System</li>
                    <li><span>Steam Rating :</span> {rating}</li>
                  </ul>
                </div>
                <div className="game-single-gallery">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery01.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery02.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery03.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery04.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery05.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <img src="/assets/img/images/game_single_gallery06.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="game-single-shape"><img src="/assets/img/images/game_section_shape.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SingleArea