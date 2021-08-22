import "../App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile  from "../components/Profile"
import Chat from "../components/Chat";

function Home() {
  // const [name, setName] = useState("");
  // const [ids, setIds] = useState([]);

  // useEffect(() => {
  //   const socket = io("http://localhost:3000");
  //   const messages = document.getElementById("messages");
  //   const form = document.getElementById("form");
  //   const messageInput = document.getElementById("message-input");
  //   const roomInput = document.getElementById("room-input");

  //   //*Nickname added
  //   var nick = prompt("what is your name?", "");
  //   setName(nick);
  //   socket.emit("chat message", `${nick} is joined`);
  //   messageInput.addEventListener("input", (e) => {
  //     if (e.target.value.length > 0) {
  //       socket.emit("typing", `${nick} is typing...`);
  //     } else {
  //       socket.emit("stopTyping");
  //     }
  //   });
  //   //*User ID
  //   socket.on("connect", () => {
  //     displayMessage(`You connected with id : ${socket.id}`);
  //   });

  //   socket.on("send message", (msg) => {
  //     displayMessage(msg);
  //   });

  //   //*************************************** */
  //   form.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //     const message = messageInput.value;
  //     const room = roomInput.value;
  //     if (message === "") return;
  //     displayMessage(message);
  //     socket.emit("chat message", message, room);
  //     messageInput.value = "";
  //   });

  //   //*typng
  //   socket.on("typing", function (data) {
  //     console.log(data);
  //     let set = new Set(R.append(data.id, ids));
  //     let arr = [...set];
  //     setIds(arr);
  //     let text = document.querySelector(".typing");
  //     if (ids.length >= 2) {
  //       console.log(ids);
  //       text.innerHTML = "Multiple users typing";
  //     } else {
  //       text.innerHTML = data.msg;
  //     }
  //   });
  //   //*stop typng
  //   socket.on("stopTyping", function () {
  //     let text = document.querySelector(".typing");
  //     text.innerHTML = "";
  //   });

  //   function displayMessage(msg) {
  //     var item = document.createElement("li");
  //     item.textContent = msg;
  //     messages.append(item);
  //   }
  // }, []);

  return (
      <Page>
        <Box>
          <Profile/>
          <Chat/>
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

export default Home
