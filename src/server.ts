import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Parse request
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const httpServer = http.createServer(app);

httpServer.listen(6060, async () => {
        console.log(`Server running on port 6060`);
    }
);
