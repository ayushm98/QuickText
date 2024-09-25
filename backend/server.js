import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors

import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

console.log(process.env.MONGO_DB_URL);
console.log(process.env.JWT_SECRET);

console.log(process.env.TEST_ENV); // Should output 'hello'

const PORT = process.env.PORT;
const __dirname = path.resolve();


// Add CORS middleware to allow requests from your frontend
app.use(cors());


// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

/*
// If you want to serve static files from frontend, but it's commented out since you're deploying them separately
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
*/
console.log("Before starting the server...");


server.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log("Server is running on port", PORT);
    connectToMongoDB();
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});


console.log("After server.listen call...");
