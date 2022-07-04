import React from 'react'

import Data from './staff.json'
function TeamMem() {
  return (
	 <section className="team-member-area pt-115 pb-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-three text-center mb-70">
                <h2>Meet The <span>Team</span></h2>
                <p>We're led by a team who constantly questions, tinkers, and challenges to unlock great creativity around every turn.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {Data.map((data, key)=>{
              return(
                      <div className="col-lg-3 col-sm-6" key={key}>
                        <div className="team-member-box text-center mb-50">
                          <div className="team-member-thumb">
                            <img src={data.img} alt={data.name} />
                            <div className="team-member-social">
                              <ul>
                                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
                                <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="team-member-content">
                            <h4><a href="/#">{data.name}</a></h4>
                            <span>{data.position}</span>
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

export default TeamMem