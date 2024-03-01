import ProductCard from "@/components/ProductCard";

const GridLayout = async () => {
	const res = await fetch(`http://localhost:8000/products`, {
		next: { tags: ["products"] },
	});
	const products = await res.json();
	return (
		<div className="grid three">
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default GridLayout;
