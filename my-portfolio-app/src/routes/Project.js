import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImg2 from '../components/HeroImg/HeroImg2';

const Project = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='PROJECTS.' text='Some of my most recent works' />
			<Footer />
		</div>
	);
};

export default Project;
