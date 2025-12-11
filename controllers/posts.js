import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getPosts (req, res) {
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function createPost(req, res) {
    // req.body contains text fields
    // req.file contains the uploaded file (handled by multer)

    // check if a file was uploaded
    if (!req.file) {
        // No file uploaded, process text data only
        try {
            const newPost = new PostMessage(req.body);
            await newPost.save();
            return res.status(201).json(newPost);
        } catch (error) {
            return res.status(409).json({ message: error.message });
        }
    }

    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64'); // Convert the file buffer to a data URI string for Cloudinary
        let dataURI = `data:${req.file.mimetype};base64,${b64}`;

        // Upload the dataURI to Cloudinary
        const result = await cloudinary.uploader.upload(dataURI, {
            folder: 'posts', 
        });

        // Create a new post object with the Cloudinary URL for database
        const postData = {
            ...req.body,
            selectedFile: result.secure_url, // Store the Cloudinary URL
            tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : [], // Convert tags string to array
        };

        //save the post to MongoDB
        const newPost = new PostMessage(postData);
        await newPost.save();

        res.status(201).json(newPost)

    } catch (error) {
        console.log("Cloudinary upload to MongoDB save failed:", error);
        res.status(500).json({ message: "Failed to create post due to file upload or database error." });
    }
};

export const updatePost = async (req, res) => {
    console.log("updating post");


    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message,selectedFile, _id: id, 
           tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : [] //conver string of tags into array if it was changed
        };
  
    console.log(updatedPost);

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
   
    const { id } = req.params;
    console.log("Deleting post id:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndDelete(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}

