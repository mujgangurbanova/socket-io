import { SET_CURRENT_USER } from "../actionTypes";

const initialState = {
  username: null,
  position: null,
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { username, position } = action.payload;
      return {
        username,
        position,
      };
    default:
      return state;
  }
}
