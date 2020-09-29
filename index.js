const http = require("http");
const router = require("./crud/router");

const port = 5000;


http
  .createServer(router)
  .listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
