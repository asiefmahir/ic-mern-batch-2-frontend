import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const PresentStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentCtx);
	const presentStudentList = studentStates.students.filter(
		(student) => student.isPresent === true,
	);

	return (
		<div className="list present-student-list">
			<h2>Present Students</h2>
			<ul>
				{presentStudentList.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "TOGGLE_LIST",
									payload: student.id,
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

export default PresentStudentList;
