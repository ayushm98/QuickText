import path from "path"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

console.log(dotenv.config()); // This should log an object with parsed variables



console.log(process.env.TEST_ENV); // Should output 'hello'

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve()



// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json()); 

app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', userRoutes);

//app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("/", (req, res) => {
    res.send("API is running");
});


/*
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
*/
/* app.get("/", (req, res) => {
    root route http://localhost:5000/
    res.send("Hello World yeahh")
}); */

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});