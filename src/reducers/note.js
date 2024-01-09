export const noteReducer = (state, action) => {
	// dispatch({ type: "CREATE_NOTE" })
	// action = { type: "CREATE_NOTE" }
	switch (action.type) {
		case "CHANGE_NOTE_INPUT": {
			console.log(action);
			return {
				...state,
				noteTitle: action.payload,
			};
		}

		case "CREATE_NOTE": {
			const newNote = {
				id: Date.now() + "",
				title: state.noteTitle,
			};

			return {
				...state,
				notes: [...state.notes, newNote],
				noteTitle: "",
			};
		}

		case "EDIT_NOTE": {
			return {
				...state,
				editMode: true,
				editableNote: action.payload,
				noteTitle: action.payload.title,
			};
		}
		case "UPDATE_NOTE": {
			return {
				...state,
				notes: state.notes.map((item) => {
					if (item.id === state.editableNote.id) {
						return { ...item, title: state.noteTitle };
					}

					return item;
				}),
				editMode: false,
				editableNote: null,
				noteTitle: "",
			};
		}

		case "REMOVE_NOTE": {
			return {
				...state,
				notes: state.notes.filter((item) => item.id !== action.payload),
			};
		}

		default: {
			return state;
		}
	}
	// return state;
};
