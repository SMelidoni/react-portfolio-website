import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HeroImg2 from '../components/hero-img/hero-img2';
import PricingCard from '../components/pricing/pricing-card';
import Work from '../components/work/work';

const Project = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='PROJECTS.' text='Some of my most recent works' />
			<Work />
			<PricingCard />
			<Footer />
		</div>
	);
};

export default Project;
