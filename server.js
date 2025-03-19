import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";


const app = express(); 

// MIDDLEWARE
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const CONNECTION_URI="mongodb+srv://usasadulina:pass@mongopractice.dj47a.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice"
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URI)
    .then(() => app.listen(PORT, () => console.log("Server is runs on PORT"+PORT)) )
    .catch((error) => console.log(error.message))

app.get("/", (req, res) => {
    res.send("Home")
} );

