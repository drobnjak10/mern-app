import mongoose from "mongoose";
import PostMessage from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();

    res.status(201).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new PostMessage(req.body);
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
