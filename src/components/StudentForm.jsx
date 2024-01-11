import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
	const { studentStates, dispatch } = useContext(StudentCtx);

	const submitHandler = (e) => {
		e.preventDefault();
		studentStates.editMode
			? dispatch({ type: "UPDATE_STUDENT" })
			: dispatch({ type: "CREATE_STUDENT" });
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) =>
					dispatch({
						type: "CHANGE_STUDENT_INPUT",
						payload: e.target.value,
					})
				}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
