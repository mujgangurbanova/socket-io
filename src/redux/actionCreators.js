import {
	ADD_NEW_CONVERSATION,
	RECEIVE_MESSAGE,
	REMOVE_CONVERSATION,
	SEND_MESSAGE,
	SET_CONVERSATIONS,
	SET_CURRENT_CONVERSATION,
	SET_CURRENT_USER,
  } from "./actionTypes";
  
  export function setCurrentUserAction(username, position) {
	return {
	  type: SET_CURRENT_USER,
	  payload: {
		username,
		position,
	  },
	};
  }
  
  export function setCurrentConversationAction(username, id) {
	return {
	  type: SET_CURRENT_CONVERSATION,
	  payload: {
		username,
		id,
	  },
	};
  }
  
  export function addNewConversationAction(user) {
	return {
	  type: ADD_NEW_CONVERSATION,
	  payload: user,
	};
  }
  
  export function removeConversationAction(id) {
	return {
	  type: REMOVE_CONVERSATION,
	  payload: id,
	};
  }
  
  export function setConversationsAction(conversations) {
	return {
	  type: SET_CONVERSATIONS,
	  payload: conversations,
	};
  }
  
  export function sendMessageAction(toUsername, content) {
	return {
	  type: SEND_MESSAGE,
	  payload: {
		toUsername,
		content,
	  },
	};
  }
  
  export function receiveMessageAction(fromUsername, content) {
	return {
	  type: RECEIVE_MESSAGE,
	  payload: {
		fromUsername,
		content,
	  },
	};
  }
  