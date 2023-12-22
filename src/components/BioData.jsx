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

import InterestSection from "./InterestSection";
import PersonalInfo from "./PersonalInfo";
import SkillSection from "./SkillSection";

const BioData = (props) => {
	// console.log(props, "form biodata");
	const { name, age, email, skills, phone, interests } = props;
	// let num = 10;
	return (
		<div className="bio-data">
			<PersonalInfo name={name} age={age} email={email} phone={phone} />
			<SkillSection skills={skills} />
			<InterestSection interests={interests} />
		</div>
	);
};

// function add(a, b) {
// 	return a + b;
// }

// add(10, 20);
// add(100, 200);

export default BioData;
