// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { cartReducer } from "./reducers/cart";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./reducers/cart";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
};

export const store = configureStore({
	reducer: rootReducer,
});
