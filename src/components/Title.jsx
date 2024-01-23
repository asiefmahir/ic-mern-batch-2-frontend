import { memo } from "react";

const Title = () => {
	console.log("Title is rendering");
	return <h2>Our Counter App</h2>;
};

export default memo(Title);
