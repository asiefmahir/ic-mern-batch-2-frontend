import ProductRow from "@/components/ProductRow";

const ProductList = async () => {
	const res = await fetch("http://localhost:8000/products", {
		next: { tags: ["products"] },
	});
	const products = await res.json();
	return (
		<tbody>
			{products?.length !== 0 &&
				products?.map((item) => (
					<ProductRow key={item.id} item={item} />
				))}
		</tbody>
	);
};

export default ProductList;
