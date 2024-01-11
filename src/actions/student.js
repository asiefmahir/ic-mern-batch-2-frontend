export const editStudent = (payload, dispatch) => {
	dispatch({
		type: "EDIT_STUDENT",
		payload: payload,
	});
};
