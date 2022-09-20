import '../../components/Footer/Footer.css';

import React from 'react';

import {
	FaHome,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='left'>
					<div className='location'>
						<FaHome
							size={20}
							style={{ color: '#fff', marginRight: '2rem' }}
						/>
						<div>
							<p>Manchester.</p>
							<p>England.</p>
							<p>United Kingdom.</p>
						</div>
					</div>
					<div className='phone'>
						<h4>
							<FaPhone
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							+447530380576
						</h4>
					</div>
					<div className='email'>
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: '#fff', marginRight: '2rem' }}
							/>
							simone.melidoni@gmail.com
						</h4>
					</div>
				</div>
				<div className='right'>
					<h4>About The Company</h4>
					<p>
						Hello there, I am Simone Melidoni, CEO & Founder of
						Zenshuii. I am here to discuss new projects and design
						challenges.
					</p>
					<div className='social'>
						<FaFacebook
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaTwitter
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
						<FaLinkedin
							size={30}
							style={{ color: '#fff', marginRight: '1rem' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
