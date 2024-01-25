import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PostDetails = () => {
	const { postId } = useParams();
	const {
		data: post,
		loading,
		errorMessage,
	} = useFetch(null, `https://jsonplaceholder.typicode.co/posts/${postId}`);

	if (errorMessage) {
		return <>{errorMessage && <p>{errorMessage}</p>}</>;
	}
	return (
		<div>
			{loading && <h2>Loading.....</h2>}

			<h2>Post Details of id - {post?.id}</h2>
			<p>The title of the post - {post?.title}</p>
			<p>The Description - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
