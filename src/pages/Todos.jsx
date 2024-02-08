import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../store/middleware";

const Todos = () => {
	const todoState = useSelector((storeState) => storeState.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos);
	}, []);
	return (
		<div>
			<h2>All Todos</h2>
			{todoState.loading && <p>Loading......</p>}
			{todoState.error && <h3>{todoState.error}</h3>}
			<ul>
				{todoState.todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Todos;
