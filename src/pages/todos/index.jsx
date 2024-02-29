const TodoList = ({ todos }) => {
	console.log("I am rendering on server");
	return (
		<div>
			<h2>All Todos</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export async function getServerSideProps() {
	console.log("I am purely called on server");
	// Fetch data from external API
	const res = await fetch("http://localhost:7000/todos");
	const todos = await res.json();
	// Pass data to the page via props
	return { props: { todos } };
}

export default TodoList;
