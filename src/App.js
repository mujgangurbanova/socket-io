import { useSelector } from "react-redux";
import Home from "./Containers/Home";
import Join from "./components/Join/Join";

import "./App.css";

function App() {
  const currentUser = useSelector((state) => state.currentUser);
  return currentUser.username ? <Home /> : <Join />;
}

export default App;