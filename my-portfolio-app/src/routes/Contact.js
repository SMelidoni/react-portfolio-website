import React from 'react';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HeroImg2 from '../components/hero-img/hero-img2';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='CONTACT.' text="Let's have a chat!" />
			<Footer />
		</div>
	);
};

export default Contact;
