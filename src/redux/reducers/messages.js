import { RECEIVE_MESSAGE, SEND_MESSAGE } from "../actionTypes";

const initialState = {};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { toUsername, content } = action.payload;
      const oldMessages = state[toUsername] || [];
      const newMessage = {
        content,
        isFromSelf: true,
      };
      return {
        ...state,
        [toUsername]: [...oldMessages, newMessage],
      };
    }
    case RECEIVE_MESSAGE: {
      const { fromUsername, content } = action.payload;
      const oldMessages = state[fromUsername] || [];
      const newMessage = {
        content,
        isFromSelf: false,
      };
      return {
        ...state,
        [fromUsername]: [...oldMessages, newMessage],
      };
    }
    default:
      return state;
  }
}
