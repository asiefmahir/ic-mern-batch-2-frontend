import { appApi } from "../api/apiSlice";

const todoApi = appApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllTodos: builder.query({
			query: () => `todos`,
			providesTags: ["todos"],
			//todos = 8
			// transformResponse: (res) => {
			// 	// return res.map((item) => ({ ...item, userName: "Mahir" }));
			// },
		}),
		createTodo: builder.mutation({
			query: (newTodo) => ({
				url: `todos`,
				method: "POST",
				body: newTodo,
			}),
			invalidatesTags: ["todos"],
		}),
		removeTodo: builder.mutation({
			query: (todoId) => ({
				url: `todos/${todoId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["todos"],
		}),
	}),
});

export const {
	useGetAllTodosQuery,
	useCreateTodoMutation,
	useRemoveTodoMutation,
} = todoApi;
