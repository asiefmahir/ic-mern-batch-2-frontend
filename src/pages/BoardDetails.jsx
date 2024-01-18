import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";

import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import TaskList from "../components/TaskList";

const BoardDetails = () => {
	const [editMode, setEditMode] = useState(false);
	const [listTitle, setListTitle] = useState("");

	const { boardId } = useParams();

	const { dispatchBoardAction } = useContext(BoardContext);
	const { lists, dispatchListAction } = useContext(ListContext);

	const renderedList = lists.filter((item) => item.boardId === boardId);

	const submitHandler = (e) => {
		e.preventDefault();

		const newListId = Date.now() + "";

		dispatchListAction({
			type: "CREATE_LIST",
			payload: { title: listTitle, boardId: boardId, id: newListId },
		});

		dispatchBoardAction({
			type: "ADD_LIST_ID_TO_A_BOARD",
			payload: { id: boardId, listId: newListId },
		});
		setEditMode(false);
		setListTitle("");
	};

	return (
		<div className="d-flex m-top-sm flex-direction-row">
			<Link to="/">Back to Boards</Link>
			{renderedList.map((taskList) => (
				<TaskList key={taskList.id} taskList={taskList} />
				// <h1 key={taskList.id}>{taskList.title}</h1>
			))}

			{!editMode ? (
				<AddItem listAddItem={true} setEditMode={setEditMode} />
			) : (
				<AddItemForm
					title={listTitle}
					listForm={true}
					onChangeHandler={(e) => {
						setListTitle(e.target.value);
					}}
					setEditMode={setEditMode}
					submitHandler={submitHandler}
				/>
			)}
		</div>
	);
};

export default BoardDetails;
