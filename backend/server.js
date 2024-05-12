
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT= process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); // Used for Parsing incoming Request with JSON payloads (from req.body)
app.use("/api/auth", authRoutes)        //Middleware




app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server is runnning on PORT ${PORT}`)
});








// to initialise a express server
// dotenv is used to read envoronmen variable
// Cokkie Parser is used for parsinf the cookie
// bcrypt is used to hash the password
// mongoose is used to connect the database 
// socket.io for real time commination
// JSON Web Token Create the token used in Socket.io