import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { createTodo, getAllTodos, removeTodo } from "../services/todos";
import { useTodo } from "../hooks/useTodo";
// import {
// 	useGetAllTodosQuery,
// 	useCreateTodoMutation,
// 	useRemoveTodoMutation,
// } from "../store/features/todos/todoApi";

const Todos = () => {
	const [todoTitle, setTodoTitle] = useState("");
	const {
		data,
		isLoading,
		isError,
		error,
		createTodoMutation,
		removeMutation,
	} = useTodo();

	const submitHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now(),
			title: todoTitle,
		};
		createTodoMutation.mutate(newTodo);
	};

	const removeHandler = (todoId) => {
		removeMutation.mutate(todoId);
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
