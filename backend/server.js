const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const dishRoutes = require("./routes/dishRoutes");

// Connect Database
connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PATCH"],
    },
});

// Make Socket.io available in controllers
app.set("io", io);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/dishes", dishRoutes);

// Socket Connection
io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });
});

// Default Route
app.get("/", (req, res) => {
    res.send("Dish Dashboard API Running...");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});