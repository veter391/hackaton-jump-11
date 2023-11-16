import { QuestionDTO } from "@/dtos/prompt/question.dto";
import { callChatGPT } from "@/routers/test";

export class QuestionService {
    async ask(question: QuestionDTO): Promise<{ answer: string }> {
        return { answer: (await callChatGPT(question.messages)) };
    }
}