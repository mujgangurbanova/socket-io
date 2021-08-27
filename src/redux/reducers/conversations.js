import {
  ADD_NEW_CONVERSATION,
  REMOVE_CONVERSATION,
  SET_CONVERSATIONS,
} from "../actionTypes";

export default function conversationsReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_CONVERSATION:
      const user = action.payload;
      return [...state, user];
    case SET_CONVERSATIONS:
      return [...action.payload];
    case REMOVE_CONVERSATION:
      const id = action.payload;
      return state.filter((conversation) => conversation.id !== id);
    default:
      return state;
  }
}
