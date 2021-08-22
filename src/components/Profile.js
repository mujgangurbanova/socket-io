import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import salome from "../images/salome.jpg.jpg";
import eli from "../images/eli.jpg";
import { MyImage } from "./Chat";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
      if(isOpen){

          setIsOpen(false);
      }else{
          setIsOpen(true)
      }
  };
  return (
    <Personal>
      <div className="quick-chat">
        <i className="fab fa-facebook-messenger"></i>
        <h2>QuickChat</h2>
      </div>
      <Logo />
      <ActiveConversations >
        <div className="active-talk">
          <h3>Active Conversations</h3>
          <span>2</span>
          <i
            onClick={handleClick}
            className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </div>
        <PersonList>
          <Persons isOpen={isOpen}>
            <MyImage src={eli} />
            <h3>Bella Bradford</h3>
          </Persons>
          <Persons isOpen={isOpen}>
            <MyImage src={salome} />
            <h3>David Bradford</h3>
          </Persons>
        </PersonList>
      </ActiveConversations>
    </Personal>
  );
};

export default Profile;

export const Personal = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  .quick-chat {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    h2 {
      font-size: 21px;
      margin: 5px 0 13px 0;
    }

    i {
      font-size: 31px;
      color: #7c6bc7;
      margin-right: 10px;
    }
  }
`;
const ActiveConversations = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  .active-talk {
    display: flex;
    align-items: center;
    position: relative;
    h3 {
      margin: 0;
    }

    i {
      position: absolute;
      right: -53px;
      cursor: pointer;
    }
    span {
      background-color: #ebedee;
      font-weight: bold;
      border-radius: 50%;
      padding: 5px 9px;
      margin-left: 7px;
    }
  }
`;

const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 73%;
`;

const Persons = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  margin: ${({ isOpen }) => (isOpen ? "10px 0" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-50px)"};
  transition: all 0.3s linear;
  padding: 0 8px;


  h3 {
    margin: 0 0 0 10px;
    color: #394f60;
  }
  &:hover {
    background-color: #f2f6fc;
    border-radius: 8px;
  }
`;
