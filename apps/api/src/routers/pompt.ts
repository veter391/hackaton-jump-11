import { QuestionService } from '@/services/prompt/question.service';
import express from 'express';

const router = express.Router();
const questionService = new QuestionService();

router.get('/api/v1/ask', async (req, res) => {
    res.json(await questionService.ask(req.body));
});

export default router;