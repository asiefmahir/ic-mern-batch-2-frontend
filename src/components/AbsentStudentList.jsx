import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AbsentStudentList = () => {
	const { students, toggleHandler } = useContext(StudentCtx);
	const absentStudentList = students.filter(
		(student) => student.isPresent === false,
	);
	return (
		<div className="list absent-student-list">
			<h2>Absent Students</h2>
			<ul>
				{absentStudentList.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => toggleHandler(student)}>
							Accidentally Added
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
