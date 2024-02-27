import Link from "next/link";

const Posts = ({ posts }) => {
	return (
		<div>
			<h2>All Posts</h2>
			<ul>
				{posts?.map((post) => (
					<Link key={post.id} href={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(`http://localhost:7000/posts`);
	const posts = await res.json();
	console.log(posts, "posts");
	return {
		props: { posts },
		revalidate: 15,
	};
}
// ISR -> Incremental Static Regeneration
export default Posts;
