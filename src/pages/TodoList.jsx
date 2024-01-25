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

const TodoList = () => {
	const {
		data: todos,
		loading,
		errorMessage,
	} = useFetch([], `https://jsonplaceholder.typicode.com/todos?_limit=5`);
	return (
		<div>
			<h2>All Posts</h2>
			{loading && <h2>Loading.......</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
