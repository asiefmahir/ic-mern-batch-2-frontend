import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import CounterApp from "../components/CounterApp";
import App from "../App";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Todos from "../pages/Todos";
import AddProductForm from "../pages/AddProduct";
import ClassComponentExample from "../pages/ClassComponentExample";
import PostList from "../pages/PostList";
import UserList from "../pages/UserList";

export const ourRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/counter-app", element: <App /> },
			{ path: "/todos", element: <Todos /> },
			{ path: "/add-product", element: <AddProductForm /> },
			{
				path: "/class-compo",
				element: <ClassComponentExample />,
			},
			{ path: "post-list", element: <PostList /> },
			{ path: "user-list", element: <UserList /> },
		],
	},
]);
