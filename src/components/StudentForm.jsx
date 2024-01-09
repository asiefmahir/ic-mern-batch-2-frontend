import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
	const { editMode, studentName, setStudentName, submitHandler } =
		useContext(StudentCtx);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={studentName}
				onChange={(e) => setStudentName(e.target.value)}
			/>
			<button type="submit">
				{editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
