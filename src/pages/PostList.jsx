import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";

const PostList = () => {
	// const posts = useLoaderData();
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Something went wrong`);
				}
				return res.json();
			})
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
				setErrorMessage("");
			})
			.catch((err) => {
				setErrorMessage(err.message);
				setPosts([]);
				setIsLoading(false);
			});
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h1>Loading............</h1>}
			{errorMessage && <h3>{errorMessage}</h3>}
			<ul>
				{posts?.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
