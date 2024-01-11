export const studentReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_STUDENT_INPUT": {
			return {
				...state,
				studentName: action.payload,
			};
		}

		case "CREATE_STUDENT": {
			const newStudent = {
				id: Date.now() + "",
				name: state.studentName,
				isPresent: undefined,
			};

			return {
				...state,
				students: [...state.students, newStudent],
				studentName: "",
			};
		}

		case "EDIT_STUDENT": {
			console.log(action);
			return {
				...state,
				editMode: true,
				editableStudent: action.payload,
				studentName: action.payload.name,
			};
		}

		case "UPDATE_STUDENT": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === state.editableStudent.id) {
						return { ...item, name: state.studentName };
					}

					return item;
				}),
				editMode: false,
				editableStudent: null,
				studentName: "",
			};
		}

		case "MAKE_PRESENT": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						return { ...item, isPresent: true };
					}

					return item;
				}),
			};
		}

		case "MAKE_ABSENT": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						return { ...item, isPresent: false };
					}

					return item;
				}),
			};
		}

		case "TOGGLE_LIST": {
			return {
				...state,
				students: state.students.map((item) => {
					if (item.id === action.payload) {
						return { ...item, isPresent: !item.isPresent };
					}

					return item;
				}),
			};
		}

		case "REMOVE_STUDENT": {
			return {
				...state,
				students: state.students.filter(
					(item) => item.id !== action.payload,
					// 1      !== 1 === false
					// 2      !== 1 === true
				),
			};
		}

		default: {
			return state;
		}
	}
};
