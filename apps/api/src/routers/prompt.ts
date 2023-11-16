import { QuestionService } from '../services/prompt/question.service';
import express from 'express';
import { callChatGPT } from './test';

const router = express.Router();
const questionService = new QuestionService();

router.post('/api/v1/ask', async (req, res) => {
    res.json(await questionService.ask(req.body));
});

router.get('/api/v1/test', async (req, res) => {
    try {
        const initialMessages = [{ role: 'user', content: 'I want you to say: "Jowo this is a test"' }]
        let messages = [...initialMessages]
        const res1 = await callChatGPT(messages);
        console.log("RESULT1", res1)
        const newMessage = res1.choices[0].message;
        messages = messages.concat(newMessage)
        const newQuestion = { role: 'user', content: 'Now i want you say the same but name is not "Jowo" its "JAWA"' }
        messages = messages.concat(newQuestion);
        const res2 = await callChatGPT(messages);
        const response = res2.choices[0].message
        res.send(response)
    } catch (e) {
        console.log("error: ", e)
        res.status(501).send("GPT error")
    }
});

export default router;