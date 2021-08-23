import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "../../redux/actionCreators";
import socket from "../../socket";
import   "./Join.css"

function Join() {
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const dispatch = useDispatch();

  function handleUsernameSubmit(event) {
    event.preventDefault();
    dispatch(setCurrentUserAction(username, position));
    socket.auth = { username, position };
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
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="username position">
        <input
          id="position"
          placeholder="Enter your position/role"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>
      <button>Join chat</button>
      </div>
    </form>
  );
}

export default Join;
