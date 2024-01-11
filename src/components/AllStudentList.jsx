import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";
import { editStudent } from "../actions/student";

const AllStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentCtx);

	return (
		<div className="list all-student-list">
			<h2>All Students</h2>
			<ul>
				{studentStates.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => editStudent(student, dispatch)}>
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
						<button
							onClick={() =>
								dispatch({
									type: "MAKE_PRESENT",
									payload: student.id,
								})
							}
						>
							Make Present
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "MAKE_ABSENT",
									payload: student.id,
								})
							}
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
