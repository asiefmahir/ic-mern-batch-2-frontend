import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

const App = ({ children }) => {
	return (
		<div className="App">
			{children}
			<StudentForm />
			<StudentSection />
		</div>
	);
};

export default App;
