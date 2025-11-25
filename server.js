import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js"

const app = express(); 

// MIDDLEWARE
app.use("/posts", postRoutes);

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

dotenv.config();
const CONNECTION_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URI)
    .then(() => app.listen(PORT, () => console.log("Server is runs on PORT"+PORT)) )
    .catch((error) => console.log(error.message))

app.get("/", (req, res) => {
    res.send("Home")
} );

