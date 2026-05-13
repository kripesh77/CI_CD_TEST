import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", async function (socket) {
  try {
    await prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
  } catch (e) {
    console.log(e);
  }
  socket.send("Hi there from ws server");
});
