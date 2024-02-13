import { useEffect, useState } from "react";
import {
	useGetAllTodosQuery,
	useCreateTodoMutation,
	useRemoveTodoMutation,
} from "../store/features/apiSlice";

const Todos = () => {
	const [todoTitle, setTodoTitle] = useState("");
	const { data, error, isError, isFetching, isLoading } =
		useGetAllTodosQuery();
	// todos = 8
	const [makeTodo] = useCreateTodoMutation();
	const [deleteTodo] = useRemoveTodoMutation();
	console.log("I am being rendered");
	// makeTodo()

	// const todoState = useSelector((storeState) => storeState.todoState);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchTodos());
	// }, []);

	const submitHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			title: todoTitle,
		};
		makeTodo(newTodo);
		// dispatch(createTodo(newTodo));
	};

	const removeHandler = (todoId) => {
		// dispatch(removeTodo(todoId));
		deleteTodo(todoId);
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
			{isLoading && <p>Loading......</p>}
			{isError && <h3>{error.message}</h3>}
			<ul>
				{data?.map((todo) => (
					<li key={todo.id}>
						<span>{todo.title}</span>
						{/* <p>{todo.userName}</p> */}

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
