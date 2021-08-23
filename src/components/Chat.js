import React from "react";
import styled from "styled-components";
import Forms from "./Forms";
import eli from "../images/eli.jpg";
import salome from "../images/salome.jpg.jpg";

const Chat = ({ messages = [], toUsername }) => {
  return (
    <MessageBox>
      {messages.map((message, index) => {
        if (message.isFromSelf) {
          return (
            <MyRow key={index}>
              <MyMessage>{message.content}</MyMessage>
              <MyImage src={eli} />
            </MyRow>
          );
        }

        return (
          <PartnerRow key={index}>
            <PartnerImage src={salome} />
            <PartnerMessage>{message.content}</PartnerMessage>
          </PartnerRow>
        );
      })}
      <Forms toUsername={toUsername} />
    </MessageBox>
  );
};

export default Chat;

export const MessageBox = styled.div`
  position: relative;
  width: 62%;
  height: auto;
  color: black;
  display: flex;
  flex-direction: column;
  background-color: #f2f6fc;
  border-radius: 20px;
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