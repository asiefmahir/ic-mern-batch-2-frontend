import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

/**
 *
 * 1) useState -> use State
 * 2) useReducer -> use Reducer
 * 3) useContext -> use Context
 * 4) useEffect -> use Effect
 * 5) useFetch -> use Fetch
 */

const PostList = () => {
	const {
		data: posts,
		loading,
		errorMessage,
	} = useFetch([], `https://jsonplaceholder.typicode.com/posts?_limit=5`);
	return (
		<div>
			<h2>All Posts</h2>
			{loading && <h2>Loading.......</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
