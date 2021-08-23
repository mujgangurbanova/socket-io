import { ADD_NEW_CONVERSATION, SET_CONVERSATIONS } from "../actionTypes";

export default function conversationsReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_CONVERSATION:
      const user = action.payload;
      return [...state, user];
    case SET_CONVERSATIONS:
      return [...action.payload];
    default:
      return state;
  }
}
