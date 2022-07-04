import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import UpcomingGames from './UpcomingGames';

function Upcoming() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<UpcomingGames/>
	</main>
	<Footer/>
	</>
  )
}

export default Upcoming