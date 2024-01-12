import { useState } from "react";

const Home = () => {
	const [counter, setCounter] = useState(10);
	return (
		<div>
			<h2>I am a Home Page Component</h2>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increase By One
			</button>
		</div>
	);
};

export default Home;
