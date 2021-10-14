import express from "express";
import { createServer } from "http";
import configurationSocket from "../config/socket.js";
import cors from "cors";
import handleAuth from "./services/auth.js";
import authRouter from "./routes/auth.js";
import bodyParser from "body-parser";

const app = express();
import { connectionDB } from "../config/db-connection.js";

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRouter);

const httpServer = createServer(app);

connectionDB()
  .then(() => {
    httpServer.listen(8080, () => {
      console.log("server started");
      const io = configurationSocket(httpServer);
      handleAuth();
      // io.on("connection", (socket) => {
      //   console.log("connected");
      // });
    });
  })
  .catch((err) => {});
