import express from 'express'
import { createPost, deletePost, getPosts } from '../controllers/postsController.js';

const postsRoutes = express.Router();

postsRoutes.get('/', getPosts)
postsRoutes.post('/create', createPost)
postsRoutes.delete('/delete/:id', deletePost)

export default postsRoutes