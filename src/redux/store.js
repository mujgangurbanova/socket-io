import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import { composeWithDevTools } from "redux-devtools-extension";
import conversationsReducer from "./reducers/conversations";
import currentConversationReducer from "./reducers/currentConversation";
import currentUserReducer from "./reducers/currentUser";
import logger from "redux-logger";
import messagesReducer from "./reducers/messages";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const reducer = combineReducers({
	currentUser: currentUserReducer,
	conversations: conversationsReducer,
	messages: messagesReducer,
	currentConversation: currentConversationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

let store;
if (process.env.NODE_ENV === "development") {
	store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(logger))
	);
} else {
	store = createStore(persistedReducer);
}

const persistor = persistStore(store);
export { store, persistor };
