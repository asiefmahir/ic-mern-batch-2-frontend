import "./App.css";
import { useState } from "react";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);
	// const [presentStudents, setPresentStudents] = useState([]);
	// const [absentStudents, setAbsentStudents] = useState([]);

	// Derived State

	console.log("Rerendered");
	const presentStudentList = students.filter(
		(student) => student.isPresent === true,
	);

	const absentStudentList = students.filter(
		(student) => student.isPresent === false,
	);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!studentName.trim()) {
			return alert(`Please Provide valid Name`);
		}
		editMode ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: null,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};

	const removeHandler = (studentId) => {
		const updatedStudentArray = students.filter(
			(student) => student.id !== studentId,
		);

		setStudents(updatedStudentArray);
	};

	const editHandler = (student) => {
		setEditMode(true);
		setEditableStudent(student);
		setStudentName(student.name);
	};

	const updateHandler = () => {
		updateStudent(editableStudent, "name", studentName);
		setEditMode(false);
		setEditableStudent(null);
		setStudentName("");
	};

	const makePresentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(
				`The student is already in the ${
					student.isPresent === true ? "Present" : "Absent"
				} list`,
			);
		}

		updateStudent(student, "isPresent", true);
	};

	const makeAbsentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(
				`The student is already in the ${
					student.isPresent === true ? "Present" : "Absent"
				} list`,
			);
		}

		updateStudent(student, "isPresent", false);
	};

	const toggleHandler = (student) => {
		updateStudent(student, "isPresent", !student.isPresent);
	};

	const updateStudent = (item, propertyName, properValue) => {
		const updatedStudentArray = students.map((student) => {
			if (student.id === item.id) {
				return { ...student, [propertyName]: properValue };
			}

			return student;
		});

		setStudents(updatedStudentArray);
	};

	// obj.a
	// obj[a]

	return (
		<div className="App">
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
			<div className="student-section">
				<div className="list all-student-list">
					<h2>All Students</h2>
					<ul>
						{students.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => editHandler(student)}>
									Edit
								</button>
								<button
									onClick={() => removeHandler(student.id)}
								>
									Remove
								</button>
								<button
									onClick={() => makePresentHandler(student)}
								>
									Make Present
								</button>
								<button
									onClick={() => makeAbsentHandler(student)}
								>
									Make Absent
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list present-student-list">
					<h2>Present Students</h2>
					<ul>
						{presentStudentList.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => toggleHandler(student)}>
									Accidentally Added
								</button>
							</li>
						))}
					</ul>
				</div>
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
			</div>
		</div>
	);
};

export default App;
