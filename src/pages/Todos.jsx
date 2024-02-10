import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, createTodo, removeTodo } from "../store/reducers/todo";

const Todos = () => {
	const [todoTitle, setTodoTitle] = useState("");

	const todoState = useSelector((storeState) => storeState.todoState);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			title: todoTitle,
		};
		dispatch(createTodo(newTodo));
	};

	const removeHandler = (todoId) => {
		dispatch(removeTodo(todoId));
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					onChange={(e) => setTodoTitle(e.target.value)}
				/>
				<button type="submit">Create Todo</button>
			</form>
			<h2>All Todos</h2>
			{todoState.loading && <p>Loading......</p>}
			{todoState.error && <h3>{todoState.error}</h3>}
			<ul>
				{todoState.todos.map((todo) => (
					<li key={todo.id}>
						<span>{todo.title}</span>
						<button onClick={() => removeHandler(todo.id)}>
							Remove todo
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todos;
