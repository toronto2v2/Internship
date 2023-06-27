import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ChatComponent from "./components/ChatComponent/ChatComponent";
const socket = io("http://localhost:3001");

function App() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [online, setOnline] = useState([]);
    const [chatVisible, setChatVisible] = useState(false);

    const onJoinClick = () => {
        if (name && room) {
            socket.emit("join_room", { name, room });
            setChatVisible(true);
        }
    };

    const handleOnlineUsers = (data) => {
        setOnline(data);
    }

    useEffect(() => {
        socket.on("updateOnline", handleOnlineUsers);

        return () => {
            socket.off("updateOnline", handleOnlineUsers);
        }
    }, []);

    const content = chatVisible ? (
        <ChatComponent
            setOnline={setOnline}
            online={online}
            socket={socket}
            user={name}
            room={room}
        />
    ) : (
        <div className="chatWrapper">
            <h3 className="appHeader"> Join Chat</h3>
            <div className="dataWrapper">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="misha..."
                    type="text"
                    className="nameInput"
                />
                <input
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="room id"
                    type="text"
                    className="roomInput"
                />
                <button onClick={onJoinClick} className="joinChatBtn">
                    Join chat room
                </button>
            </div>
        </div>
    );

    return <div className="App">{content}</div>;
}

export default App;
