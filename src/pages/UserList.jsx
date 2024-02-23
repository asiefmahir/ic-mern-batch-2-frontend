import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class UserList extends Component {
	// state = {
	// 	isLoading: true,
	// 	users: [],
	// 	errorMessage: "",
	// };

	// componentDidMount() {
	// 	fetch(`https://jsonplaceholder.typicode.com/users`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			this.setState({
	// 				...this.state,
	// 				isLoading: false,
	// 				users: data,
	// 				errorMessage: "",
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			this.setState({
	// 				...this.state,
	// 				users: [],
	// 				isLoading: false,
	// 				errorMessage: err.messages,
	// 			});
	// 		});
	// }
	render() {
		const { isLoading, data: users, errorMessage } = this.props;
		console.log(this.props, "from users");
		return (
			<div>
				<h2>UserList</h2>
				{isLoading && <h2>Loading.....</h2>}
				{errorMessage && <h3>{errorMessage}</h3>}
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.username}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default withFetch(
	`https://jsonplaceholder.typicode.com/users`,
	[],
	UserList,
);
