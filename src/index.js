import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ourRouter } from "./router/router";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <StudentProvider>
			<App />
		</StudentProvider> */}
		{/* <App2 />
		<App /> */}
		{/* <BoardProvider>
			<ListProvider>
				<TaskProvider>
					<RouterProvider router={ourRouter} />
				</TaskProvider>
			</ListProvider>
		</BoardProvider> */}
		{/* <App2 /> */}
		{/* <RouterProvider router={ourRouter} /> */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
