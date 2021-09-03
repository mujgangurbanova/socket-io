import "./../styles/Join.css";

import { setCurrentUserAction } from "../redux/actionCreators";
import socket from "../socket";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import axios from "../axios";

function Login() {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const positionRef = useRef();
  const fullNameRef = useRef();

  function handleUsernameSubmit(event) {
    event.preventDefault();
    let fullName = fullNameRef.current.value;
    let username = usernameRef.current.value;
    let position = positionRef.current.value;
    console.log(usernameRef.current);
    axios
      .post("/users", {
        fullName: fullName,
        username: username,
        position: position,
        image: "/images/cap.png",
      })
      .then(
        (response) => {
          console.log(response);
          dispatch(setCurrentUserAction(username, position));
          socket.auth = {
            username: username,
            position: position,
            fullName: fullName,
          };
          socket.connect();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <form
      data-testid="login-component"
      className="login"
      autoComplete="off"
      onSubmit={handleUsernameSubmit}
    >
      <div className="form">
        <h1>Login</h1>
        <div className="fullName username">
          <input
            id="fullName"
            placeholder="Enter your fullname"
            ref={fullNameRef}
          />
        </div>
        <div className="username">
          <input
            id="username"
            placeholder="Enter your username"
            ref={usernameRef}
          />
        </div>
        <div className="username position">
          <input
            id="position"
            placeholder="Enter your position/role"
            ref={positionRef}
          />
        </div>
        <button>Join chat</button>
      </div>
    </form>
  );
}

export default Login;
