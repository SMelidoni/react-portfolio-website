import './work-card/work-card.styles.css';
import WorkCard from './work-card/work-card';
import ProjectCardData from './work-card-data';
import React from 'react';

const Work = () => {
	return (
		<div className='work-container'>
			<h1 className='project-heading'>Projects</h1>
			<div className='project-container'>
				{ProjectCardData.map((val, index) => {
					return (
						<WorkCard
							key={index}
							imgsrc={val.imgsrc}
							title={val.title}
							text={val.text}
							view={val.view}
							source={val.source}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Work;
