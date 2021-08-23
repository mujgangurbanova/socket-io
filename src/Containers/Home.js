import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import Chat from "../components/Chat";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import socket from "../socket";
import { receiveMessageAction } from "../redux/actionCreators";

function Home() {
  const [activeConversation, setActiveConversation] = useState("");
  const messages = useSelector((state) => state.messages[activeConversation]);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("receive message", (message, username) => {
      console.log("recevied", message, username);
      dispatch(receiveMessageAction(username, message));
    });

    return () => {
      socket.off("send message");
    };
    // eslint-disable-next-line
  }, []);

  const handleConversationClick = (username) => {
    setActiveConversation(username);
  };

  return (
    <Page>
      <Box>
        <Profile onConversationClick={handleConversationClick} />
        {activeConversation ? (
          <Chat toUsername={activeConversation} messages={messages} />
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
