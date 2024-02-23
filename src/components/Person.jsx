import React, { Component } from "react";

export default class Person extends Component {
	render() {
		const { name, age } = this.props;
		console.log(this.props);
		return (
			<div>
				<h1>The name of the person is {name}</h1>
				<p>Age of the person is {age}</p>
			</div>
		);
	}
}
