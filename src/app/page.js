import GridLayout from "@/components/GridLayout";

const Shop = () => {
	return (
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<GridLayout />
					</div>
				</div>
			</div>
		</div>
	);
};

// On-Demand ISR -> On-Demand Incremental Static Regeneration

export default Shop;

// import Image from "next/image";

// const getPosts = async () => {
// 	const res = await fetch(`http://localhost:8000/posts`, {
// 		cache: "no-store",
// 	});
// 	const posts = await res.json();
// 	return posts;
// };
// export default async function Home() {
// 	console.log("Server Compo");
// 	const posts = await getPosts();

// 	return (
// 		<main>
// 			<h2>All Posts</h2>
// 			<br />
// 			<hr />
// 			<ul>
// 				{posts?.map((post) => (
// 					<li key={post.id}>{post.title}</li>
// 				))}
// 			</ul>
// 		</main>
// 	);
// }
