import Forms from "./Forms";
import React, { useRef } from "react";
import eli from "../images/eli.jpg";
import salome from "../images/salome.jpg.jpg";
import styled from "styled-components";

const Chat = ({ messages = [], toUsername }) => {
  const messageBoxRef = useRef();

  const handleNewMessage = () => {
    if (!messageBoxRef.current) {
      return;
    }
    const height = messageBoxRef.current.scrollHeight;
    messageBoxRef.current.scrollTo({
      top: height,
    });
  };

  return (
    <MessageContainer>
      <MessageBox ref={messageBoxRef}>
        {messages.map((message, index) => {
          if (message.isFromSelf) {
            return (
              <MyRow key={index}>
                <MyMessage>{message.content}</MyMessage>
                <MyImage src={eli} />
              </MyRow>
            );
          } else {
            return (
              <PartnerRow key={index}>
                <PartnerImage src={salome} />
                <PartnerMessage>{message.content}</PartnerMessage>
              </PartnerRow>
            );
          }
        })}
      </MessageBox>
      <Forms onNewMessage={handleNewMessage} toUsername={toUsername} />
    </MessageContainer>
  );
};

export default Chat;

const MessageContainer = styled.div`
  height: 80vh;
  position: relative;
  width: 62%;
  padding-bottom: 100px;
  background-color: #f2f6fc;
  border-radius: 20px;
`;

export const MessageBox = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  background-color: #19233b;
  color: #fff;
  padding: 5px 25px;
  margin-right: 5px;
  border-radius: 7px;
  align-items: center;
  display: flex;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 5px 25px;
  display: flex;
  margin-left: 5px;
  border-radius: 7px;
`;

export const MyImage = styled.img`
  width: 44px;
  height: 47px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const PartnerImage = styled(MyImage)`
  width: 49px;
  height: 47px;
  margin-left: 10px;
`;
