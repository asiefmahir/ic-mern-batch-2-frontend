import { memo } from "react";

const Button = ({ submitHandler }) => {
	console.log("Button is Rendering");
	return <button onClick={submitHandler}>Increase Counter</button>;
};

export default memo(Button);
