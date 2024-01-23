import { memo } from "react";

const CounterApp = ({ counter }) => {
	console.log("CounterApp is Rendering");
	return <p>The value of the counter is {counter}</p>;
};

export default memo(CounterApp);
