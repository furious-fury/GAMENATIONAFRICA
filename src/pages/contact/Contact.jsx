import React from 'react'
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import ContactArea from './ContactArea';


function Contact() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<ContactArea/>
	</main>
	<Footer/>
	</>
  )
}

export default Contact