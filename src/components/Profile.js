import React, { useEffect, useState } from "react";
import {
	addNewConversationAction,
	setConversationsAction,
} from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

import { MyImage } from "./Chat";
import PersonInformation from "./PersonInformation";
import axios from "../axios";
import eli from "../images/eli.jpg";
import socket from "../socket";
import styled from "styled-components";

const Profile = ({ onConversationClick }) => {
	const [isClicked, setIsClicked] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const conversations = useSelector((state) => state.conversations);
	const currentUser = useSelector((state) => state.currentUser);

	useEffect(() => {
		socket.on("new user", (user) => {
			dispatch(addNewConversationAction(user));
		});

		axios.get("users").then((response) => {
			const users = response.data.filter(
				(user) => user.username !== currentUser.username
			);
			dispatch(setConversationsAction(users));
		});

		return () => {
			socket.off("new user");
		};
		// eslint-disable-next-line
	}, []);

	const handleClick = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<Personal>
			<div className="quick-chat">
				<i className="fab fa-facebook-messenger"></i>
				<h2>QuickChat</h2>
			</div>
			<PersonInformation />
			<ActiveConversations>
				<div className="active-talk">
					<h3>Active Conversations</h3>
					<span>{conversations.length}</span>
					<i
						onClick={handleClick}
						className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}
					></i>
				</div>
				<PersonList>
					{conversations.map((user) => (
						<Persons
							onClick={() => onConversationClick(user.username, user.id)}
							key={user.username}
							isOpen={isOpen}
						>
							<MyImage src={eli} />
							<h3>{user.username}</h3>
						</Persons>
					))}
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
