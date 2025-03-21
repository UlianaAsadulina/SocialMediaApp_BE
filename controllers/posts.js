import PostMessage from "../models/postMessage.js"

export async function getPosts (req, res) {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export async function createPost(req, res) {
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
};