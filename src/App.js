import BioData from "./components/BioData";
import "./App.css";

// const obj = {
// 	a: 10,
// 	b: 20,
// 	c: 30,
// };

const bioInfos = [
	{
		id: 1,
		name: "Mahir Asief",
		age: "26",
		email: "asiefmahir1@gmail.com",
		skills: ["Js", "TS", "React", "Node"],
		interests: ["System Design", "Chess", "Cricket"],
	},
	{
		id: 2,
		name: "Ahmed Shahin",
		age: "25",
		phone: 354354354354,
		email: "sahih@gmail.com",
		skills: ["Js", "TS", "React", "Node", "html", "css"],
		interests: ["System Design", "Football"],
	},
];

function App() {
	return (
		<div className="App">
			{bioInfos.map((biodata) => (
				<BioData
					key={biodata.id}
					name={biodata.name}
					age={biodata.age}
					email={biodata.email}
					skills={biodata.skills}
					interests={biodata.interests}
					phone={biodata.phone}
				/>
			))}
		</div>
	);
	// console.log("I am being called");
	// return (
	// 	<div className="App" id="App">
	// 		<BioData
	// 			name="Mahir Asief"
	// 			age="26"
	// 			email="asiefmahir1@gmail.com"
	// 			skills={["Js", "TS", "React", "Node"]}
	// 			interests={["System Design", "Chess", "Cricket"]}
	// 		/>
	// 		<hr />
	// 		<hr />
	// 		<BioData
	// 			name="Ahmed Shahin"
	// 			age="25"
	// 			email="shahin@gmail.com"
	// 			phone="4534545845641"
	// 			skills={["Js", "TS", "React", "Node", "html", "css"]}
	// 			interests={["System Design", "Football"]}
	// 		/>
	// 	</div>
	// );
}

// App()

/**
 * Component must have 3 Criteria:
 * 1. Must be a function
 * 2. That function should return "something"
 * 3. That "something" must be some html-ish code (JSX)
 */

// App()

export default App;
