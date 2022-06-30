import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'
import postsRoutes from "./src/routes/posts.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/posts', postsRoutes);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server is up on the port: ${PORT}`)))
    .catch(error => console.log(error))