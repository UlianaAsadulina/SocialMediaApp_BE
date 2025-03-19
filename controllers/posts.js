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

export function createPost(req, res) {
    res.send("Post Creatiion")
};