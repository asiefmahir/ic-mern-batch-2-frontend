import React from "react";

const InterestSection = ({ interests }) => {
	return (
		<div className="interests">
			<h2>My Interest:</h2>
			<ul>
				{interests.map((interest) => (
					<li key={interest}>{interest}</li>
				))}
			</ul>
		</div>
	);
};

export default InterestSection;
