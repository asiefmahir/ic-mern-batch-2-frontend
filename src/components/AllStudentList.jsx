import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AllStudentList = () => {
	const {
		students,
		editHandler,
		removeHandler,
		makeAbsentHandler,
		makePresentHandler,
	} = useContext(StudentCtx);

	return (
		<div className="list all-student-list">
			<h2>All Students</h2>
			<ul>
				{students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => editHandler(student)}>
							Edit
						</button>
						<button onClick={() => removeHandler(student.id)}>
							Remove
						</button>
						<button onClick={() => makePresentHandler(student)}>
							Make Present
						</button>
						<button onClick={() => makeAbsentHandler(student)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
