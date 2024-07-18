import express from 'express';
import DBConnction from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/route.js';

const app = express();
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

DBConnction();

app.use('/', router);
app.listen(3000, () => {
    console.log("server listening on http://localhost:3000");
}); 