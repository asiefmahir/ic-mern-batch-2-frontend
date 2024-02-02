// export const addToCart = (product) => {
// 	return {
// 		type: "cart/addToCart",
// 		payload: product,
// 	};
// };

// export const removeFromCart = (productId) => {
// 	return {
// 		type: "cart/removeFromCart",
// 		payload: productId,
// 	};
// };

// export const modifyQuantityOfAnItem = (obj) => {
// 	return {
// 		type: "cart/modifyQuantityOfAnItem",
// 		payload: obj,
// 	};
// };

// export const clearCart = () => {
// 	return {
// 		type: "cart/clearCart",
// 	};
// };

import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const modifyQuantityOfAnItem = createAction(
	"cart/modifyQuantityOfAnItem",
);
export const clearCart = createAction("cart/clearCart");

// addToCart(); // {type: 'cart/addToCart'}
// addToCart(5); // {type:'cart/addToCart', payload: 5 }
