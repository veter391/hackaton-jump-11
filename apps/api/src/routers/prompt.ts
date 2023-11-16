import { QuestionService } from '../services/prompt/question.service';
import express from 'express';
import { callChatGPT } from './test';

const router = express.Router();
const questionService = new QuestionService();

router.get('/api/v1/ask', async (req, res) => {
    res.json(await questionService.ask(req.body));
});

router.get('/api/v1/test', async (req, res) => {
    try {
        const { choices } = await callChatGPT();
        const lastMessage = choices[0].message;
        res.send(lastMessage)
    } catch (e) {
        console.log("error: ", e)
        res.status(501).send("GPT error")
    }
});

export default router;