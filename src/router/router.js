import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";
import Home from "../pages/Home";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", index: true, element: <Home /> },
			{ path: "/posts", element: <PostList /> },
			{ path: "/posts/:postId", element: <PostDetails /> },
		],
	},

	// { path: "/about", element: <h1>I am about page</h1> },
]);
