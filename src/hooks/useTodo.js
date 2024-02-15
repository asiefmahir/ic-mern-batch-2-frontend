import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllTodos, createTodo, removeTodo } from "../services/todos";

export const useTodo = () => {
	const client = useQueryClient();
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["todos"],
		queryFn: getAllTodos,
		// refetchOnMount: true,
		// refetchOnWindowFocus
	});

	const createTodoMutation = useMutation({
		mutationFn: createTodo,
		onSuccess: () => {
			client.invalidateQueries(["todos"]);
		},
	});

	const removeMutation = useMutation({
		mutationFn: removeTodo,
		onSuccess: () => {
			client.invalidateQueries(["todos"]);
		},
	});

	return {
		data,
		isLoading,
		isError,
		error,
		createTodoMutation,
		removeMutation,
	};
};
