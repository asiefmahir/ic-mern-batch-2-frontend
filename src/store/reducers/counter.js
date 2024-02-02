export const counterReducer = (state = 20, action) => {
	switch (action.type) {
		case "increment": {
			return state + action.payload;
		}

		case "decrement": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};
