const initialState = {
	loading: true,
	todos: [],
	error: "",
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "todo/fetchTodoPending": {
			return {
				...state,
				loading: true,
			};
		}

		case "todo/fetchTodoSucceeded": {
			return {
				...state,
				loading: false,
				todos: action.payload,
				error: "",
			};
		}

		case "todo/fetchTodoRejected": {
			return {
				...state,
				loading: false,
				error: action.payload,
				todos: [],
			};
		}

		default: {
			return state;
		}
	}
};
