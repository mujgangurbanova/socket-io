import {
  ADD_NEW_CONVERSATION,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  SET_CONVERSATIONS,
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

export function addNewConversationAction(user) {
  return {
    type: ADD_NEW_CONVERSATION,
    payload: user,
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
