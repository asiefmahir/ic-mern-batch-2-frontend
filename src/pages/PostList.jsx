import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";
class PostList extends Component {
	// state = {
	// 	isLoading: false,
	// 	posts: [],
	// 	errorMessage: "",
	// };

	// componentDidMount() {
	// 	fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			this.setState({
	// 				...this.state,
	// 				isLoading: false,
	// 				posts: data,
	// 				errorMessage: "",
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			this.setState({
	// 				...this.state,
	// 				isLoading: false,
	// 				posts: [],
	// 				errorMessage: err.message,
	// 			});
	// 		});
	// }

	// componentDidUpdate(prevProp, prevState) {
	// 	// console.log(prevProp, "prev props??!!");
	// 	// console.log(prevState, "prev state??!!");
	// 	if (prevState.posts.length !== this.state.posts.length) {
	// 		console.log("Something");
	// 	}
	// }

	componentWillUnmount() {}
	render() {
		console.log("I am from render");
		const { isLoading, data: posts, errorMessage } = this.props;
		console.log(this.props);
		return (
			<div>
				<h2>All Posts</h2>
				{isLoading && <h3>Loading......</h3>}
				{errorMessage && <p>{errorMessage}</p>}
				<ul>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	[],
	PostList,
);

// export const Posts = () => {
// 	useEffect(() => {
// 		console.log("");
// 		return () => {};
// 	}, [counter]);

// 	return <div>PostList</div>;
// };
