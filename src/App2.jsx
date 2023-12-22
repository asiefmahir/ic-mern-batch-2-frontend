import { useState } from "react";
import "./App.css";

const App2 = () => {
	// state
	// Re-Render
	const [dynamicCounter, setDynamicCounter] = useState(100);
	const [counter2, setCounter2] = useState(50);
	console.log("I am being called");
	// console.log(dynamicCounter, "dcCounter");
	// console.log(setDynamicCounter, "setFunction");

	const increaseHandler = (payload) => {
		// console.log("Increase Handler triggered");
		// dynamicCounter++;
		setDynamicCounter(dynamicCounter + payload);
		// dynamicCounter++;
		// dynamicCounter = dynamicCounter + 1;
		// dynamicCounter + 1 = 100 + 1 = 101
		// dynamicCounter = 101
	};

	const decreaseHandler = (payload) => {
		// console.log("decrease handler triggered");
		// dynamicCounter--;
		setDynamicCounter(dynamicCounter - payload);
	};

	const increaseHandler2 = () => {
		setCounter2(counter2 + 70);
	};

	return (
		<div className="App">
			<div className="counter-1">
				<p>The value of the counter is {dynamicCounter}</p>
				<button onClick={() => increaseHandler(1)}>
					Increase By 1
				</button>

				<button onClick={() => increaseHandler(10)}>
					Increase By 10
				</button>
				<button onClick={() => decreaseHandler(1)}>
					Decrease By 1
				</button>
				<button onClick={() => decreaseHandler(5)}>
					Decrease By 5
				</button>
			</div>
			<hr />
			<div className="counter-2">
				<p>The value of Counter 2 is {counter2}</p>
				<button onClick={increaseHandler2}>Increase By 70</button>
			</div>
		</div>
	);
};

export default App2;
