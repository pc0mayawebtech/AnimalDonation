import express from 'express';
import connectDB from './db/connection.js';
import cors from 'cors';
import router from './routes/router.js';
const port = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
await connectDB();

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
}); 