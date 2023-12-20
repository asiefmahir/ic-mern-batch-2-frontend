import BioData from "./components/BioData";
import "./App.css";

// const obj = {
// 	a: 10,
// 	b: 20,
// 	c: 30,
// };

function App() {
	console.log("I am being called");
	return (
		<div className="App" id="App">
			<BioData
				name="Mahir Asief"
				age="26"
				email="asiefmahir1@gmail.com"
				// phone="0213543545"
				skills={["Js", "TS", "React", "Node"]}
				interests={["System Design", "Chess", "Cricket"]}
			/>
			<hr />
			<hr />
			<BioData
				name="Ahmed Shahin"
				age="25"
				email="shahin@gmail.com"
				phone="4534545845641"
				skills={["Js", "TS", "React", "Node", "html", "css"]}
				interests={["System Design", "Football"]}
			/>
		</div>
	);
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
