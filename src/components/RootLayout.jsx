import Nav from "./Nav";

const RootLayout = ({ children }) => {
	return (
		<div>
			<Nav />
			{children}
		</div>
	);
};

export default RootLayout;
