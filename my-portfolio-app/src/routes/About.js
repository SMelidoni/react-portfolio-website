import React from 'react';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HeroImg2 from '../components/hero-img/hero-img2';
import AboutContent from '../components/about/about-content';

const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				heading='ABOUT.'
				text="I'm a friendly Full Stack Developer that is here to bring your ideas to life"
			/>
			<AboutContent />
			<Footer />
		</div>
	);
};

export default About;
