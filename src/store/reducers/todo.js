import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: true,
	todos: [],
	error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
	const res = await fetch(`http://localhost:5000/todos`);
	const todos = await res.json();
	return todos;
});

export const createTodo = createAsyncThunk(
	"todos/createTodo",
	async (todoObj) => {
		const res = await fetch(`http://localhost:5000/todos`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(todoObj),
		});
		const data = await res.json();
		console.log(data);
		return data;
	},
);

export const removeTodo = createAsyncThunk(
	"todos/removeTodo",
	async (todoId) => {
		const res = await fetch(`http://localhost:5000/todos/${todoId}`, {
			method: "DELETE",
		});

		return todoId;
	},
);

export const todoSlice = createSlice({
	name: "todos",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.loading = false;
				state.todos = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(createTodo.fulfilled, (state, action) => {
				state.todos.push(action.payload);
			})
			.addCase(removeTodo.fulfilled, (state, action) => {
				state.todos = state.todos.filter(
					(item) => item.id !== action.payload,
				);
			});
	},
});

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "todo/fetchTodoPending": {
// 			return {
// 				...state,
// 				loading: true,
// 			};
// 		}

// 		case "todo/fetchTodoSucceeded": {
// 			return {
// 				...state,
// 				loading: false,
// 				todos: action.payload,
// 				error: "",
// 			};
// 		}

// 		case "todo/fetchTodoRejected": {
// 			return {
// 				...state,
// 				loading: false,
// 				error: action.payload,
// 				todos: [],
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };
