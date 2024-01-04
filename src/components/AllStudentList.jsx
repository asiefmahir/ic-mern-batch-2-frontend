import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AllStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentCtx);

	const shiftListHandler = (student, value) => {
		if (student.isPresent !== undefined) {
			return alert(`The student is already in a list`);
		}

		dispatch({
			type: "UPDATE_STUDENT",
			payload: {
				item: student,
				propertyName: "isPresent",
				propertyValue: value,
			},
		});
	};

	return (
		<div className="list all-student-list">
			<h2>All Students</h2>
			<ul>
				{studentStates.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "EDIT_STUDENT",
									payload: student,
								})
							}
						>
							Edit
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "REMOVE_STUDENT",
									payload: student.id,
								})
							}
						>
							Remove
						</button>
						<button onClick={() => shiftListHandler(student, true)}>
							Make Present
						</button>
						<button
							onClick={() => shiftListHandler(student, false)}
						>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
