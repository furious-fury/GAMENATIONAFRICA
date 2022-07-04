import React from 'react'
import ErrorArea from './ErrorArea'
import Breadcrumb from './Breadcrumb';
import Footer from '../../components/footer/Footer';
import HeaderTwo from '../../components/header/HeaderTwo';

const Error = () => {
  return (
    <>
	<HeaderTwo/>
	<main>
    <Breadcrumb/>
    <ErrorArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Error