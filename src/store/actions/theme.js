export const changeBgColor = (payload) => {
	return {
		type: "theme/changeBgColor",
		payload: payload,
	};
};
export const changeTextColor = (payload) => {
	return {
		type: "theme/changeTextColor",
		payload: payload,
	};
};
