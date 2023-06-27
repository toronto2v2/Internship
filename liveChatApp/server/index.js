const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const online = [];

io.on("connection", (socket) => {
    console.log(`USER_CONNECTED: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data.room);
        console.log(`USER ID: ${socket.id} connected room ${data.room}`);
        online.push({ name: data.name, id: socket.id, room: data.room });
        io.emit("updateOnline", online);
    });

    let typingTimeout;
    socket.on("user_typing", (data) => {
        socket.to(data.room).emit("receive_typingUser", data.user);

        if (typingTimeout) clearTimeout(typingTimeout);

        typingTimeout = setTimeout(() => {
            socket.to(data.room).emit("removeTyping");
            typingTimeout = null;
        }, 1000);
    });

    socket.on("send_msg", (data) => {
        socket.to(data.room).emit("receive_msg", data);
    });

    socket.on("disconnect", () => {
        console.log(`USER_DISCONNECTED: ${socket.id}`);
        if (online.length) {
            const disconectedIndex = online.findIndex(
                (el) => el.id === socket.id
            );
            online.splice(disconectedIndex, 1);
            io.emit("updateOnline", online);
        }
    });
});

io.listen(3001, () => {
    console.log(`SERVER_IS_RUNNING`);
});
