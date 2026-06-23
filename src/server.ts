import http from "node:http";

  http.createServer(() => {
    console.log("hello!");
  }).listen(Number(process.env.PORT));