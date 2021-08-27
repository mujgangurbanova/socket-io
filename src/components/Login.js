import "./../styles/Join.css";

import { setCurrentUserAction } from "../redux/actionCreators";
import socket from "../socket";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function Login() {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const positionRef = useRef();

  function handleUsernameSubmit(event) {
    event.preventDefault();
    dispatch(
      setCurrentUserAction(usernameRef.current.value, positionRef.current.value)
    );
    socket.auth = {
      username: usernameRef.current.value,
      position: positionRef.current.value,
    };
    socket.connect();
  }

  return (
    <form autoComplete="off" onSubmit={handleUsernameSubmit}>
      <div className="form">
        <h1>Login</h1>
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
