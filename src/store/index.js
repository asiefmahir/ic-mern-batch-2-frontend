// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { cartReducer } from "./reducers/cart";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// // import { ourMiddleWare } from "./middleware";
// import logger from "redux-logger";
// import { postReducer } from "./reducers/post";
// import { todoReducer } from "./reducers/todo";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// 	posts: postReducer,
// 	todos: todoReducer,
// });

// export const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk, logger)),
// );

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { cartReducer } from "./reducers/cart";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
// import { todoSlice } from "./reducers/todo";
import { appApi } from "./features/api/apiSlice";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	// todoState: todoSlice.reducer,
	[appApi.reducerPath]: appApi.reducer,
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: (gM) => gM().concat(appApi.middleware),
});
setupListeners(store.dispatch);
