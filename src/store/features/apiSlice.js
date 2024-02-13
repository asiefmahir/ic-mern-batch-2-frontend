import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/` }),
	tagTypes: ["todos", "products"],
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
		// http://localhost:5000/todos/
	}),
});

// {
//     "todos": {data: [], is}
// }
export const {
	useGetAllTodosQuery,
	useCreateTodoMutation,
	useRemoveTodoMutation,
} = appApi;
