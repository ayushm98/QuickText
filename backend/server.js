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




console.log(process.env.MONGO_DB_URL);
console.log(process.env.JWT_SECRET);

console.log(process.env.TEST_ENV); // Should output 'hello'

const PORT = process.env.PORT || 5000;
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
server.listen(PORT, () => {
    if (err) {
        console.error("Failed to start server:", err);
    } else {
        console.log("Server Running on port " + PORT);
        connectToMongoDB();
    }
});

console.log("After server.listen call...");
