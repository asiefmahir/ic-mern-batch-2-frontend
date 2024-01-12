import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, []);

	console.log(id);
	return (
		<div>
			<h2>I am Post Details Page of Post ID - {id}</h2>
			<p>
				<strong>Post title</strong>:{post?.title}
			</p>
			<p>
				<strong>Post Body</strong>:{post?.body}
			</p>
		</div>
	);
};

export default PostDetails;
