import React from 'react';
import Slider from 'react-slick';



function SliderTwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll:1,
    center:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }

  // useEffect(()=>{
	// new WOW.WOW({
  //   boxClass: 'wow',
	// 	animateClass: 'animated',
	// 	offset: 0,
	// 	mobile: false,
	// 	live: true,
  //   loop:Infinity,
  // }).init();

  // },[])

  return (


<section className="slider-area">
            <Slider className="slider-active" {...settings}>
              <div className="single-slider slider-bg slider-style slider-1">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content ">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider slider-bg slider-style slider-2">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider slider-bg slider-style slider-3">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider slider-bg slider-style slider-4">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider slider-bg slider-style slider-5">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider slider-bg slider-style slider-6">
                <div className="container-fluid container-full-padding">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                      <div className="slider-content">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </section>
  )
}

export default SliderTwo