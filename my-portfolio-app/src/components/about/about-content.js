import './about-content.styles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import ReactImg1 from '../../images/react1.jpg';
import ReactImg2 from '../../images/react2.webp';

const AboutContent = () => {
	return (
		<div className='about'>
			<div className='left'>
				<h1>Who Am I?</h1>
				<p>
					I'm a Full Stack Developer. I create responsive secure
					websites for my clients.
				</p>
				<Link to='/contact'>
					<button className='btn'>Contact</button>
				</Link>
			</div>
			<div className='right'>
				<div className='img-container'>
					<div className='img-stack top'>
						<img src={ReactImg1} className='img' alt='true' />
					</div>
					<div className='img-stack bottom'>
						<img src={ReactImg2} className='img' alt='true' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
