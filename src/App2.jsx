import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Title from "./components/Title";
import CounterApp from "./components/CounterApp";
import Button from "./components/Button";
const App2 = () => {
	console.log("App is rendering");
	const [counter, setCounter] = useState(10);
	const [counter2, setCounter2] = useState(55);

	const increaseHandler = useCallback(() => {
		setCounter((currentState) => currentState + 1);
	}, []); // #00FF22

	const increaseHandler2 = useCallback(() => {
		setCounter2((currentCounter2) => currentCounter2 + 7);
	}, []); // #55FF88 // #66HHNN

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 999999999) {
			i++;
		}
		return counter % 2 === 0 ? "Even" : "ODD";
	}, [counter]);
	return (
		<div className="App">
			<Title />
			<br />
			<div className="counter-app">
				<CounterApp counter={counter} />
				<p>The counter value is {isEven}</p>
				<Button submitHandler={increaseHandler} />
			</div>
			<br />
			<hr />
			<div className="counter-app">
				<CounterApp counter={counter2} />
				<Button submitHandler={increaseHandler2} />
			</div>
		</div>
	);
};

export default App2;
