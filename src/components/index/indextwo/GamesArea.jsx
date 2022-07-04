import React from 'react'
import {Link} from 'react-router-dom'

import Data from './games.json'

function GamesArea() {

  
  return (
	 <section className="featured-game-area position-relative pt-115 pb-90">
            <div className="featured-game-bg" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-70">
                    <h2>FEATURED <span>GAMES</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown
                      known issue where certain skin strategic</p>
                  </div>
                </div>
              </div>
              <div className="row featured-active">
                {Data.map((data, key) =>{
                  return(
                 <div className="col-lg-4 col-sm-6 grid-item" key={key}>
                   <div className="featured-game-item mb-30">
                     <div className="featured-game-thumb">
                       <img src={data.img} alt="" />
                     </div>
                     <div className="featured-game-content">
                       <h4><Link to="/#"><span>{data.name}</span></Link></h4>
                       <div className="featured-game-meta">
                       <span><i className="fas fa-gamepad" /> {data.platform}</span>
                       </div>
                     </div>
                     <div className="featured-game-content featured-game-overlay-content">
                       <h4><Link to="/#">{data.name}</Link></h4>
                       <div className="featured-game-meta">
                         <span><i className="fas fa-gamepad" /> {data.platform}</span>
                       <Link to="/#" className="btn btn-style-two">Learn More</Link>
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

export default GamesArea