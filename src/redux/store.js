import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import conversationsReducer from "./reducers/conversations";
import currentConversationReducer from "./reducers/currentConversation";
import currentUserReducer from "./reducers/currentUser";
import logger from "redux-logger";
import messagesReducer from "./reducers/messages";

const reducer = combineReducers({
  currentUser: currentUserReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  currentConversation: currentConversationReducer,
});

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));
} else {
  store = createStore(reducer);
}

export { store };
