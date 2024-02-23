import React, { Component } from "react";

export default class CounterWithClass extends Component {
	state = {
		counter: 10,
		todoTitle: "",
		todos: [],
	};

	increaseHandler = (payload) => {
		const { counter } = this.state;
		this.setState({ ...this.state, counter: counter + payload });
	};

	decreaseHandler = (payload) => {
		this.setState({ ...this.state, counter: this.state.counter - payload });
	};

	submitHandler = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Date.now() + "",
			title: this.state.todoTitle,
		};

		this.setState({
			...this.state,
			todos: [...this.state.todos, newTodo],
			todoTitle: "",
		});
	};

	removeHandler = (todoId) => {
		this.setState({
			...this.state,
			todos: this.state.todos.filter((todo) => todo.id !== todoId),
		});
	};
	render() {
		console.log("I am being recalled");
		return (
			<div>
				<div className="counter-app">
					<p>The value of the counter is {this.state.counter}</p>
					<button onClick={() => this.increaseHandler(1)}>
						Increase By 1
					</button>
					<button onClick={() => this.increaseHandler(5)}>
						Increase By 5
					</button>
					<button onClick={() => this.decreaseHandler(1)}>
						Decrease By 1
					</button>
					<button onClick={() => this.decreaseHandler(3)}>
						Decrease By 3
					</button>
				</div>
				<hr />
				<br />
				<div className="todo-app">
					<form onSubmit={this.submitHandler}>
						<input
							type="text"
							value={this.state.todoTitle}
							onChange={(e) =>
								this.setState({
									...this.state,
									todoTitle: e.target.value,
								})
							}
						/>
						<button>Create Todo</button>
					</form>
					<ul>
						{this.state.todos.map((todo) => (
							<li key={todo.id}>
								<span>{todo.title}</span>
								<button
									onClick={() => this.removeHandler(todo.id)}
								>
									Remove Todo
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
