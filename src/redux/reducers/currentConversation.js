import { SET_CURRENT_CONVERSATION } from "../actionTypes";

const initialState = {
	username: null,
	id: null,
};

export default function currentConversationReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			const { username, id } = action.payload;
			return {
				username,
				id,
			};
		default:
			return state;
	}
}
