import React, { useEffect } from "react";
import {
  receiveMessageAction,
  setCurrentConversationAction,
} from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

import Chat from "./Chat";
import Profile from "./Profile";
import socket from "../socket";
import styled from "styled-components";

function Home() {
  const currentConversation = useSelector((state) => state.currentConversation);
  const messages = useSelector(
    (state) => state.messages[currentConversation.username]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("receive message", (message, username) => {
      dispatch(receiveMessageAction(username, message));
    });

    return () => {
      socket.off("send message");
    };
    // eslint-disable-next-line
  }, []);

  const handleConversationClick = (username, id) => {
    dispatch(setCurrentConversationAction(username, id));
  };

  return (
    <Page data-testid="home-component">
      <Box>
        <Profile onConversationClick={handleConversationClick} />
        {currentConversation.id !== null ? (
          <Chat toUsername={currentConversation} messages={messages} />
        ) : (
          <span>Select a conversation to start chatting</span>
        )}
      </Box>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Box = styled.div`
  height: 90%;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  display: flex;
`;

export default Home;
