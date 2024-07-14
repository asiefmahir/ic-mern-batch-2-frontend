import { createProduct } from "../actions/product";

const AddProductForm = () => {
	console.log("I am form page");
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
				// action={createProduct}
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
					required
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProductForm;
