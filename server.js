import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";


dotenv.config();
const PORT = process.env.PORT || 5000;
const CONNECTION_URI = process.env.MONGO_URI;


const app = express();

// Middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Routes

app.use("/posts", postRoutes);

// Simple root route
app.get("/", (req, res) => {
    res.send("Welcome to the Memories");
});


const startServer = async () => {
    try {
        await mongoose.connect(CONNECTION_URI);
        console.log("Connected to MongoDB");        
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
       
    }
}

// Execute the server start function
startServer();