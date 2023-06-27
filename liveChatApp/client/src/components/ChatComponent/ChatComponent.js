import { useState, useEffect } from "react";
import OnlineComponent from "../OnlineComponent/OnlineComponent";

import "./ChatComponent.css";

const ChatComponent = ({ socket, user, room, online }) => {
    const [msg, setMsg] = useState("");
    const [messagesData, setMessagesData] = useState([]);
    const [typingStatus, setTypingStatus] = useState("");

    const onSendMessageClick = () => {
        if (msg) {
            const now = new Date();
            const msgData = {
                room,
                author: user,
                msg,
                time:
                    `${now.getHours()}`.padEnd(2, "0") +
                    ":" +
                    `${now.getMinutes()}`.padEnd(2, "0"),
                key: now.getTime(),
            };
            setMessagesData((prevMessages) => [...prevMessages, msgData]);
            socket.emit("send_msg", msgData);
            setMsg("");
        }
    };

    const onInputTyping = (e) => {
        if (e.key === "Enter") {
            onSendMessageClick();
        }
        socket.emit("user_typing", { user, room });
    };
    
    const receiveTypingUserHandler = (data) => {
        setTypingStatus(data);
    };
    const removeTypingHandler = () => {
        setTypingStatus("");
    };
    const receiveMsgHandler = (data) => {
        setMessagesData((prevMessages) => [...prevMessages, data]);
    };

    useEffect(() => {
        socket.on("receive_typingUser", receiveTypingUserHandler);
        socket.on("removeTyping", removeTypingHandler);
        socket.on("receive_msg", receiveMsgHandler);

        return () => {
            socket.off("receive_typingUser", receiveTypingUserHandler);
            socket.off("removeTyping", removeTypingHandler);
            socket.off("receive_msg", receiveMsgHandler);
        };
    }, [socket]);


    const messagesContent = messagesData.map((m) => {
        return (
            <li key={m.key} className="messageWrapper">
                <div className="message">{m.msg}</div>
                <span className="author">{m.author}</span>
                <span className="time">{m.time}</span>
            </li>
        );
    });

    return (
        <div className="chatWrapper">
            <div className="contentWrapper">
                <OnlineComponent online={online} />

                <div className="chatHeader">
                    <p>Live Chat</p>
                </div>
                <div className="chatBodyWrapper">
                    <ul className="chatBody">
                        {messagesContent}
                        <p className="statusSender">
                            {typingStatus ? `${typingStatus} is typing...` : ""}
                        </p>
                    </ul>
                </div>
                <div className="chatFooter">
                    <input
                        onKeyDown={(e) => onInputTyping(e)}
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Type..."
                        type="text"
                        className="messageInput"
                    />
                    <button onClick={onSendMessageClick} className="sendMsgBtn">
                        &#9658;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
