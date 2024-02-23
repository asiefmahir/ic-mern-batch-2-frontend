import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h2>Loading......</h2>;
	}
	return (
		<div>
			<h2>PostDetails Page of Id - {post?.id}</h2>
			<p>Title - {post?.title}</p>
			<h2>henten</h2>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:5000/posts`);
	const data = await res.json();
	/**
     * [
			{
				params: {},
			}, // See the "paths" section below
		]
     */
	return {
		paths: data?.map((post) => ({
			params: { postId: post.id.toString() },
		})),
		fallback: true, // false or "blocking"
	};
}

export async function getStaticProps(context) {
	const { postId } = context.params;
	const res = await fetch(`http://localhost:5000/posts/${postId}`);
	const post = await res.json();
	return { props: { post } };
}

export default PostDetails;
