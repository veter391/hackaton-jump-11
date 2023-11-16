import testRouter from "./prompt";
import express from 'express';

require('dotenv').config({ path: __dirname + '/../../../.env' });

// const loadIndexes = async () => {
//     try {
//         const mongodb = await MongoDB.connect(process.env.DB_URI);
//         mongodb.generateIndex("users", "id", "unique")
//         mongodb.generateIndex("users", "identifier", "unique")
//     } catch (e) {
//         console.log()
//     }
// }

const router = express.Router();
const initializeRouters = async () => {
    // PUT HERE YOUR ROUTERS
    router.use('/', testRouter);
}

// loadIndexes();
initializeRouters();

export default router 