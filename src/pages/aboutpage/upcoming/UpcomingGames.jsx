import React from 'react'
import {Link} from 'react-router-dom'

import Data from './games.json'

function truncate(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

function UpcomingGames() {
  return (
	  <section className="upcoming-games-area upcoming-games-bg pt-120 pb-80">
        <div className="container">
          <div className="row">
            {Data.map((data, key)=>{
              return (
            <div className="col-lg-4 col-md-6" key={key}>
              <div className="upcoming-game-item mb-40">
                <div className="upcoming-game-head">
                  <div className="uc-game-head-title">
                    <span>{data.Genres}</span>
                    <h4><a href="/#">{data.name}</a></h4>
                    <p>{data.platform}</p>
                  </div>
                  <div className="uc-game-price">
                  </div>
                </div>
                <p>{truncate(data.desc, 140)}</p>
                <div className="upcoming-game-thumb">
                  <img src={data.img} alt={data.name} />
                  <div className="upcoming-game-cart">
                    <Link to={`/games/${data.slug}`} className="btn transparent-btn">VIEW Now <i className="fas fa-arrow-right" /></Link>
                  </div>
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default UpcomingGames