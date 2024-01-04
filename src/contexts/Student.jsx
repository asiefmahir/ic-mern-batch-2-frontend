import { createContext, useReducer } from "react";
// import { studentReducer } from "../reducers/student";

export const StudentCtx = createContext();

const studentReducer = (currentState, action) => {
	switch (action.type) {
		case "CHANGE_NAME": {
			return {
				...currentState,
				studentName: action.payload,
			};
		}

		case "CREATE_STUDENT": {
			const newStudent = {
				id: Date.now() + "",
				name: currentState.studentName,
				isPresent: undefined,
			};

			return {
				...currentState,
				students: [...currentState.students, newStudent],
				studentName: "",
			};
		}

		case "EDIT_STUDENT": {
			return {
				...currentState,
				editMode: true,
				editableStudent: action.payload,
				studentName: action.payload.name,
			};
		}
		case "UPDATE_STUDENT": {
			return {
				...currentState,
				students: currentState.students.map((student) => {
					if (student.id === action.payload.item.id) {
						return {
							...student,
							[action.payload.propertyName]:
								action.payload.propertyValue,
						};
					}

					return student;
				}),
				editMode:
					action.payload.propertyName === "name"
						? false
						: currentState.editMode,
				editableStudent:
					action.payload.propertyName === "name"
						? null
						: currentState.editableStudent,
				studentName:
					action.payload.propertyName === "name"
						? ""
						: currentState.studentName,
			};
		}

		case "REMOVE_STUDENT": {
			return {
				...currentState,
				students: currentState.students.filter(
					(item) => item.id !== action.payload,
				),
			};
		}

		default: {
			return currentState;
		}
	}
};

const initState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};

const StudentProvider = ({ children }) => {
	// State Management with Reducer
	const [studentStates, dispatch] = useReducer(studentReducer, initState);

	return (
		<StudentCtx.Provider value={{ studentStates, dispatch }}>
			{children}
		</StudentCtx.Provider>
	);
};

export default StudentProvider;
