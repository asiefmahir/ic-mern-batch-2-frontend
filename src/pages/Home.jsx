import { useCounter } from "../hooks/useCounter";

const Home = () => {
	const { counter, increaseHandler, decreaseHandler } = useCounter();
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button onClick={() => increaseHandler(1)}>Increase By 1</button>
			<button onClick={() => increaseHandler(10)}>Increase By 10</button>
			<button onClick={() => increaseHandler(5)}>Increase By 5</button>
			<br />
			<button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
			<button onClick={() => decreaseHandler(7)}>Decrease By 7</button>
			<button onClick={() => decreaseHandler(3)}>Decrease By 3</button>
		</div>
	);
};

export default Home;
