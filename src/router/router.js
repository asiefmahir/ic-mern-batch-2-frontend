import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import About from "../pages/About";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

import ErrorPage from "../pages/ErrorPage";
import { loadAllPost } from "../services/post";
import ErrorPageForPosts from "../pages/ErrorPageForPosts";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{
				path: "/posts",
				element: <PostList />,
				loader: loadAllPost,
				errorElement: <ErrorPageForPosts />,
			},
			{ path: "/posts/:id", element: <PostDetails /> },
		],
	},
	// { path: "/about", element: <h1>I am about page</h1> },
]);
