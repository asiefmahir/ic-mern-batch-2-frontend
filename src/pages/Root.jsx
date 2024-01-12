import { Link, Outlet } from "react-router-dom";

export default function Root() {
	// console.log(Outlet);
	return (
		<>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
							{/* <a href="/">Home</a> */}
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/posts">PostList</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
