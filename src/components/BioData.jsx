/**
 *
 * props = {
 *  name: "Mahir Asief",
 *  age: 40,
 *  phone: "021251221212",
 *  email: "XXXXXXXXXXXXXXXXXXXXX",
 *  skills: ["JS", "TS", "React", "Node"],
 * interests: ["System Design", "Cricket", "Chess"]
 * }
 */

const BioData = (props) => {
	// console.log(props, "form biodata");
	const { name, age, email, skills, phone, interests } = props;
	// let num = 10;
	return (
		<div className="bio-data">
			<h2>Bio Data of {name}</h2>
			<hr />
			<div className="personal-info">
				<h2>Personal Information</h2>
				<p>
					<strong>Email:</strong>
					{email}
				</p>
				{phone && (
					<p>
						<strong>Phone:</strong>
						{phone}
					</p>
				)}
				<p>
					<strong>Age:</strong>
					{age}
				</p>
			</div>
			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interest:</h2>
				<ul>
					{interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// function add(a, b) {
// 	return a + b;
// }

// add(10, 20);
// add(100, 200);

export default BioData;
