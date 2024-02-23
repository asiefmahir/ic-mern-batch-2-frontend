import { Component } from "react";
import Person from "../components/Person";
import CounterWithClass from "../components/CounterWithClass";

class ClassComponentExample extends Component {
	render() {
		return (
			<div>
				<h2>I am a class based Component</h2>
				<hr />
				<Person name="Mahir Asief" age={27} />
				<hr />
				<br />
				<CounterWithClass />
			</div>
		);
	}
}

export default ClassComponentExample;
