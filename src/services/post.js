export const loadAllPost = async () => {
	return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
};
