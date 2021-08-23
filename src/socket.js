import { io } from "socket.io-client";
const SOCKET_SERVER_URL = "http://localhost:8080";

const socket = io(SOCKET_SERVER_URL, { autoConnect: false });

export default socket;