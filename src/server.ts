import express from "express";

const server = express();

server.get("/", (request, response) => {
    return response.send("Hello Corinthians!");
});

export default server;