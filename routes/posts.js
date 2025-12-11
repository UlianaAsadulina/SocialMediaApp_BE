import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() }); //temporary storage in memory, middleware to handle multipart/form-data
const router = express.Router();


// Use the multer middleware to handle file upload
router.post('/', upload.single("selectedFile"), createPost);
router.get('/', getPosts);
router.patch('/:id', updatePost); 
router.delete('/:id', deletePost); 
router.patch('/:id/likePost', likePost);


export default router;