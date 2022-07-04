import React from 'react';
import Footer from '../../footer/Footer';
import HeaderTwo from '../../header/HeaderTwo';
import SliderTwo from './SliderTwo';
import NewGamesArea from './NewGamesArea'
import GamesArea from './GamesArea'
import CtaArea from './CtaArea'


function IndexTwo(){
	return(

   
    

        <>
         {/* header-area */}
          <HeaderTwo/>
        {/* main-area */}
        <main>
          <SliderTwo/>
          <NewGamesArea/>
          <CtaArea/>
          <GamesArea/>
        </main>
        {/* main-area-end */}
        <Footer/>
        </>
	)
}
	
export default IndexTwo