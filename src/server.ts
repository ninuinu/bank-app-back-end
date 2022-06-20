import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
const PORT = 6060;

// Parse request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const httpServer = http.createServer(app);

httpServer.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  routes(app);
});
