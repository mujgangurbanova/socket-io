import "emoji-mart/css/emoji-mart.css";

import React, { useEffect, useRef, useState } from "react";

import { Picker } from "emoji-mart";
import happy from "../images/happy.svg";
import paperClip from "../images/paperclip.svg";
import rightArrow from "../images/right-arrow.svg";
import { sendMessageAction } from "../redux/actionCreators";
import socket from "../socket";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Forms = ({ toUsername, onNewMessage }) => {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const dispatch = useDispatch();
  const emojiPickerRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (event.target.matches("img.emoji") || !emojiPickerRef.current) {
      return;
    }

    if (!emojiPickerRef.current.contains(event.target)) {
      setShowEmojis(false);
    }
  };

  const handleClick = () => {
    if (showEmojis) {
      setShowEmojis(false);
    } else {
      setShowEmojis(true);
    }
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const handleMessageSend = (event) => {
    event.preventDefault();
    dispatch(sendMessageAction(toUsername.username, input));
    socket.emit("chat message", input, toUsername.username, toUsername.id);
    setInput("");
    setTimeout(onNewMessage, 10);
  };

  return (
    <Form onSubmit={handleMessageSend}>
      <FormInput>
        <img className="paper-clip" src={paperClip} alt="select-file"></img>
        <InputGroup>
          <input
            value={input}
            className="enter-message"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your message here..."
          />
          {showEmojis && (
            <div ref={emojiPickerRef} className="emoji-picker">
              <Picker onSelect={addEmoji} />
            </div>
          )}
          <img
            onClick={handleClick}
            className="emoji icon"
            alt="emoji"
            src={happy}
          ></img>
        </InputGroup>
        <Button disabled={input.length === 0}>
          <span>Send</span>
          <img alt="arrow" src={rightArrow}></img>
        </Button>
      </FormInput>
    </Form>
  );
};

export default Forms;

const Form = styled.form`
  position: absolute;
  width: 90%;
  padding: 5px;
  bottom: 20px;
  right: 20px;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  background-color: white;
`;

const Button = styled.button`
  flex-basis: 15%;
  padding: 9px 13px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: #014dfc;
  border: 1px solid #014dfc;
  color: white;

  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    border-color: gray;
  }

  img {
    width: 13px;
    margin-left: 5px;
  }
`;

const InputGroup = styled.div`
  position: relative;
  flex-basis: 80%;
  margin-right: 10px;

  input {
    widht: 100%;
  }

  img.emoji {
    position: absolute;
    top: 10px;
    right: 20px;
  }
`;

const FormInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;

  .paper-clip {
    flex-basis: 5%;
  }

  .enter-message {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    border: 2px solid #f0f0f2;
    outline: none;
    position: relative;
  }

  .emoji {
    position: absolute;
    width: 25px;
    right: 124px;
    top: 10px;
    cursor: pointer;
  }

  .emoji-picker {
    position: absolute;
    right: 10px;
    bottom: 370px;
    height: 56%;
  }
`;
