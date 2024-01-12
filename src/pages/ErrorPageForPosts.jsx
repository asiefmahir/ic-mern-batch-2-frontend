import { useRouteError } from "react-router-dom";

export default function ErrorPageForPosts() {
	const error = useRouteError();
	console.error(error.message);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred in PostList Page.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
