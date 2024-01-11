import { createContext, useState, useReducer } from "react";
import { studentReducer } from "../reducers/student";

export const StudentCtx = createContext();

const initState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};

const StudentProvider = ({ children }) => {
	const [studentStates, dispatch] = useReducer(studentReducer, initState);

	return (
		<StudentCtx.Provider value={{ studentStates, dispatch }}>
			{children}
		</StudentCtx.Provider>
	);
};

export default StudentProvider;

// const [studentName, setStudentName] = useState("");
// const [students, setStudents] = useState([]);
// const [editMode, setEditMode] = useState(false);
// const [editableStudent, setEditableStudent] = useState(null);

// const updateStudent = (item, propertyName, properValue) => {
// 	const updatedStudentArray = students.map((student) => {
// 		if (student.id === item.id) {
// 			return { ...student, [propertyName]: properValue };
// 		}

// 		return student;
// 	});

// 	setStudents(updatedStudentArray);
// };

// const submitHandler = (e) => {
// 	e.preventDefault();
// 	if (!studentName.trim()) {
// 		return alert(`Please Provide valid Name`);
// 	}
// 	editMode ? updateHandler() : createHandler();
// };

// const createHandler = () => {
// 	const newStudent = {
// 		id: Date.now() + "",
// 		name: studentName,
// 		isPresent: null,
// 	};

// 	setStudents([...students, newStudent]);
// 	setStudentName("");
// };
// const updateHandler = () => {
// 	updateStudent(editableStudent, "name", studentName);
// 	setEditMode(false);
// 	setEditableStudent(null);
// 	setStudentName("");
// };

// const removeHandler = (studentId) => {
// 	const updatedStudentArray = students.filter(
// 		(student) => student.id !== studentId,
// 	);

// 	setStudents(updatedStudentArray);
// };

// const editHandler = (student) => {
// 	setEditMode(true);
// 	setEditableStudent(student);
// 	setStudentName(student.name);
// };

// const makePresentHandler = (student) => {
// 	if (student.isPresent === true || student.isPresent === false) {
// 		return alert(
// 			`The student is already in the ${
// 				student.isPresent === true ? "Present" : "Absent"
// 			} list`,
// 		);
// 	}

// 	updateStudent(student, "isPresent", true);
// };

// const makeAbsentHandler = (student) => {
// 	if (student.isPresent === true || student.isPresent === false) {
// 		return alert(
// 			`The student is already in the ${
// 				student.isPresent === true ? "Present" : "Absent"
// 			} list`,
// 		);
// 	}

// 	updateStudent(student, "isPresent", false);
// };

// const toggleHandler = (student) => {
// 	updateStudent(student, "isPresent", !student.isPresent);
// };

// const studentCtxValue = {
// 	studentName,
// 	setStudentName,
// 	students,
// 	setStudents,
// 	editMode,
// 	setEditMode,
// 	editableStudent,
// 	setEditableStudent,
// 	updateStudent,
// 	submitHandler,
// 	editHandler,
// 	makePresentHandler,
// 	makeAbsentHandler,
// 	removeHandler,
// 	toggleHandler,
// };
