import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AbsentStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentCtx);
	const absentStudentList = studentStates.students.filter(
		(student) => student.isPresent === false,
	);
	return (
		<div className="list absent-student-list">
			<h2>Absent Students</h2>
			<ul>
				{absentStudentList.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "UPDATE_STUDENT",
									payload: {
										item: student,
										propertyName: "isPresent",
										propertyValue: !student.isPresent,
									},
								})
							}
						>
							Accidentally Added
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
