import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import http from "http";

import initRoutes from "./routers/web";
import connectDB from "./config/connectDB";

const app = express();
let server = http.createServer(app);

app.use(express.static("./src/public"));
app.use("/images", express.static("images"));

dotenv.config({ path: "./sh/env.sh" });

connectDB()
    .then(() => console.log("connected DB"))
    .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

server.listen(process.env.APP_HOST);
