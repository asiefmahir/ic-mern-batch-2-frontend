import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { cartReducer } from "./reducers/cart";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
// import { ourMiddleWare } from "./middleware";
import logger from "redux-logger";
import { postReducer } from "./reducers/post";
import { todoReducer } from "./reducers/todo";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	posts: postReducer,
	todos: todoReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger)),
);

// import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "./reducers/cart";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";

// const rootReducer = {
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// };

// export const store = configureStore({
// 	reducer: rootReducer,
// });
