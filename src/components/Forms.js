import "emoji-mart/css/emoji-mart.css";

import React, { useState } from "react";

import { Picker } from "emoji-mart";
import happy from "../images/happy.svg";
import paperClip from "../images/paperclip.svg";
import rightArrow from "../images/right-arrow.svg";
import { sendMessageAction } from "../redux/actionCreators";
import socket from "../socket";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Forms = ({ toUsername }) => {
	const [input, setInput] = useState("");
	const [showEmojis, setShowEmojis] = useState(false);
	const dispatch = useDispatch();

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

	const handleMessageSend = () => {
		dispatch(sendMessageAction(toUsername.username, input));
		socket.emit("chat message", input, toUsername.username, toUsername.id);
		setInput("");
	};

	return (
		<Form>
			<FormInput>
				<img className="paper-clip" src={paperClip} alt="select-file"></img>
				<input
					value={input}
					className="enter-message"
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Enter your message here..."
				/>
				{showEmojis && (
					<div className="emoji-picker">
						<Picker onSelect={addEmoji} />
					</div>
				)}
				<img
					onClick={handleClick}
					className="emoji icon"
					alt="emoji"
					src={happy}
				></img>
				<Button onClick={handleMessageSend}>
					<span>Send</span>
					<img alt="arrow" src={rightArrow}></img>
				</Button>
			</FormInput>
		</Form>
	);
};

export default Forms;

const Form = styled.div`
	position: absolute;
	width: 90%;
	padding: 5px;
	bottom: 2px;
	right: 30px;
	border-radius: 12px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	display: flex;
	background-color: white;
`;

const Button = styled.button`
	padding: 9px 13px;
	border-radius: 5px;
	outline: none;
	cursor: pointer;
	background-color: #014dfc;
	border: 1px solid #014dfc;
	color: white;
	img {
		width: 13px;
		margin-left: 5px;
	}
`;

const FormInput = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	.enter-message {
		width: 500px;
		padding: 10px 15px;
		margin: 0 10px;
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
		position: fixed;
		right: 310px;
		bottom: 58px;
		height: 56%;
	}
`;
