import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import SingleArea from './SingleArea';
import ReleaseGame from './ReleaseGame'

import { useParams } from 'react-router-dom';
import Games from '../upcoming/games.json'


function GameSingle () {

	const params = useParams();
	const FOUND = Games.find((item) => item.slug === params.gameID);

  return ( 
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb name={FOUND.name}/>
	<SingleArea
	name={FOUND.name}
	rating={FOUND.sRating}
	platform={FOUND.platform}
	genre={FOUND.Genres}
	desc={FOUND.desc}
	/>
	<ReleaseGame/>
	</main>
	<Footer/>
	</>
  )
}

export default GameSingle