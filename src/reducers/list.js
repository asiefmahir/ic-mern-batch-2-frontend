/**
 * lists = [
 *     {id, title, boardId, tasks: []},
 *     {id, title, boardId, tasks: []},
 *     {id, title, boardId, tasks: []},
 *
 * ]
 */

export const listReducer = (lists = [], action) => {
	switch (action.type) {
		case "CREATE_LIST": {
			const newList = {
				id: action.payload.id,
				title: action.payload.title,
				boardId: action.payload.boardId,
				tasks: [],
			};

			return [...lists, newList];
		}

		case "UPDATE_LIST_NAME": {
			return lists.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, title: action.payload.title };
				}

				return item;
			});
		}

		case "REMOVE_LIST": {
			return lists.filter((item) => item.id !== action.payload);
		}

		case "CHANGE_BOARD_ID_OF_A_LIST": {
			return lists.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, boardId: action.payload.boardId };
				}

				return item;
			});
		}

		case "ADD_TASK_ID_TO_A_LIST": {
			return lists.map((item) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						tasks: [...item.tasks, action.payload.taskId],
					};
				}

				return item;
			});
		}

		case "REMOVE_TASK_ID_FROM_A_LIST": {
			return lists.map((item) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						tasks: item.tasks.filter(
							(tId) => tId !== action.payload.taskId,
						),
					};
				}

				return item;
			});
		}

		default: {
			return lists;
		}
	}
};
