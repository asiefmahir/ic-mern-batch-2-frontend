const initialState = {
	loading: true,
	posts: [],
	error: "",
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case "post/fetchPostPending": {
			return {
				...state,
				loading: true,
			};
		}

		case "post/fetchPostSucceeded": {
			return {
				...state,
				loading: false,
				posts: action.payload,
				error: "",
			};
		}

		case "post/fetchPostRejected": {
			return {
				...state,
				loading: false,
				error: action.payload,
				posts: [],
			};
		}

		default: {
			return state;
		}
	}
};
