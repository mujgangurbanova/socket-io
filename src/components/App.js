import "../styles/App.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./Home";
import Login from "./Login";
import { setCurrentUserAction } from "../redux/actionCreators";

function App() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://google.com").then((res) => res);
    return () => {
      dispatch(setCurrentUserAction(null, null));
    };
    // eslint-disable-next-line
  }, []);
  return currentUser.username ? <Home /> : <Login />;
}

export default App;
