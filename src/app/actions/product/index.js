"use server";

import { revalidateTag } from "next/cache";

export const createProduct = async (formData) => {
	console.log("I am being called from server");
	const title = formData.get("title");
	const price = Number(formData.get("price"));
	const description = formData.get("description");
	const image = formData.get("image");
	console.log("Product Title", title);

	const product = { title, price, description, image };

	const res = await fetch(`http://localhost:8000/products`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(product),
	});

	revalidateTag("products");
};

export const deleteProduct = async (productId) => {
	await fetch(`http://localhost:8000/products/${productId}`, {
		method: "DELETE",
	});
	revalidateTag("products");
};
