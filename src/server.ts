import http from "http";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
const PORT = 6060;

app.use(cors({
  origin: ["http://localhost:3000"]
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const httpServer = http.createServer(app);

httpServer.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  routes(app);
});
