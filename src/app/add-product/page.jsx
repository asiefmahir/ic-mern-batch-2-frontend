import { createProduct } from "../actions/product";

const AddProductForm = () => {
	// const [product, setProduct] = useState({
	// 	title: "",
	// 	price: "",
	// 	image: "",
	// 	description: "",
	// });

	// // const [addProduct] = useCreateProductMutation();

	// const handleChange = (e) => {
	// 	setProduct({ ...product, [e.target.name]: e.target.value });
	// 	// setProduct({ ...product, "title": sdfdsfdsfad });
	// };

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				action={createProduct}
			>
				<p>Title:</p>
				<input
					name="title"
					style={{ display: "block", width: "80%" }}
					required
				/>
				<br />
				<p>Price:</p>

				<input
					name="price"
					style={{ display: "block", width: "80%" }}
					type="number"
					required
				/>
				<br />

				<p>Description:</p>
				<input
					name="description"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<p>Image URL:</p>

				<input
					name="image"
					style={{ display: "block", width: "80%" }}
					type="text"
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProductForm;
