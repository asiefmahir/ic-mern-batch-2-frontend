const RootLayout = ({ children }) => {
	return (
		<div>
			<nav>
				<li>Shop Page</li>
				<li>About Page</li>
				<li>Home Page</li>
			</nav>
			{children}
		</div>
	);
};

export default RootLayout;
