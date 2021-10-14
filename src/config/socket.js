let io;
import { Server } from "socket.io";

const configuration = (httpServer) => {
  io = new Server(httpServer, {
    cors: true,
  });
  return io;
};

export const getio = () => {
  if (!io) {
    throw new Error("Websocket is not init");
  }
  return io;
};

export default configuration;
