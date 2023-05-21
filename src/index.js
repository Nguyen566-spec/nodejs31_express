import express from "express";
import cors from "cors";
import rootRouter from "./router/rootRouter.js";

const app = express();

app.listen(8080);

app.use(express.json());

app.use(cors());

app.use("/api", rootRouter);
