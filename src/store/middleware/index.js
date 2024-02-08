export const ourMiddleWare = (store) => (next) => async (action) => {
	console.log("Our Redux Store", store.getState());
	console.log("Dispatched Action", action);

	if (typeof action === "function") {
		action(store.dispatch);
		return;
	}

	next(action);

	// if (action === "fake-dispatch-post") {
	// 	fetchPosts();
	// }

	// if (action === "fake-dispatch-todo") {
	// 	fetchTodos();
	// }
	// setTimeout(() => {
	// 	next(action);
	// }, 2000);
};

export const fetchPosts = async (dispatch) => {
	dispatch({ type: "post/fetchPostPending" });
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=5`,
		);
		const posts = await res.json();
		dispatch({ type: "post/fetchPostSucceeded", payload: posts });
		return;
	} catch (error) {
		dispatch({
			type: "post/fetchPostRejected",
			payload: error.message,
		});
		return;
	}
};

export const fetchTodos = async (dispatch) => {
	dispatch({ type: "todo/fetchTodoPending" });
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/todos?_limit=5`,
		);
		const todos = await res.json();
		dispatch({ type: "todo/fetchTodoSucceeded", payload: todos });
		return;
	} catch (error) {
		dispatch({
			type: "todo/fetchTodoRejected",
			payload: error.message,
		});
		return;
	}
};
