import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());


app.get('/test', (req, res) => {
    res.send('Hello World!');
});


export default app;