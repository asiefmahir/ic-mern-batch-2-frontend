import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/middleware";

const Posts = () => {
	const postState = useSelector((storeState) => storeState.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts);
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			{postState.loading && <p>Loading......</p>}
			{postState.error && <h3>{postState.error}</h3>}
			<ul>
				{postState.posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
