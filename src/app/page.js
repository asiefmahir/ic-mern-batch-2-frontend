// import GridLayout from "@/components/GridLayout";

const Shop = async () => {
	const res = await fetch(`http://localhost:4000/products`, {
		next: { tags: ["products"] },
	});
	const products = await res.json();
	console.log("I am being rerendered");
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
						<div class="grid three">
							{products.map((product) => (
								<div key={product.id} className="ingredient">
									<div className="ingredient__image">
										<figure>
											<img
												src={product.image}
												alt={product.title}
											/>
										</figure>
									</div>
									<div className="ingredient__title">
										<h3>{product.title}</h3>
									</div>
									<div className="ingredient__content">
										<p className="price">
											<span>{product.price}</span>
										</p>
									</div>
									<div className="ingredient__btn">
										<button className="btn-white">
											ADD TO CART
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// export async function getStaticProps () {

// }

export default Shop;
