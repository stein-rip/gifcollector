import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import favoriteRouter from "./routes/favoriteRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", favoriteRouter);
export const api = functions.https.onRequest(app);
