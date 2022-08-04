import React from 'react';
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import GameSingleArea from './GameSingleArea';

// import { useParams } from 'react-router-dom';
// import Games from '../upcoming/games.json'

function Overview() {

	// const params = useParams();
	// const FOUND = Games.find((item) => item.slug === params.gameID);
	// console.log(FOUND);
  return (
	<>
		<HeaderTwo/>
		<main>
			<Breadcrumb/>
			<GameSingleArea/>

		</main>
		<Footer/>
	</>
  )
}

export default Overview