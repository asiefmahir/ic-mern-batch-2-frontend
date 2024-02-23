import { Component } from "react";

export const withFetch = (url, initState, WrappedComponent) => {
	// WrappedComponent = PostList
	// WrappedComponent = UserList

	class WrapperComponent extends Component {
		state = {
			isLoading: false,
			data: initState,
			errorMessage: "",
		};

		componentDidMount() {
			fetch(url)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: result,
						errorMessage: "",
					});
				})
				.catch((err) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: initState,
						errorMessage: err.message,
					});
				});
		}

		render() {
			return (
				<WrappedComponent
					isLoading={this.state.isLoading}
					data={this.state.data}
					errorMessage={this.state.errorMessage}
				/>
				// <PostList
				//    isLoading={this.state.isLoading}
				//    data={this.state.data}
				//	  errorMessage={this.state.errorMessage}
				// />
				// <UserList
				//    isLoading={this.state.isLoading}
				//    data={this.state.data}
				//	  errorMessage={this.state.errorMessage}
				// />
			);
		}
	}

	return WrapperComponent;
};
