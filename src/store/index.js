import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const counterReducer = (state = 20, action) => {
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

const initState = {
	bgColor: "#fff",
	textColor: "#000",
};
const themeReducer = (state = initState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}

		case "theme/changeTextColor": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		case "theme/reset": {
			return initState;
		}

		default: {
			return state;
		}
	}
};

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
