const SkillSection = ({ skills }) => {
	// const {skills} = props
	return (
		<div className="skills">
			<h2>My Skills:</h2>
			<ul>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillSection;
