import { QuestionDTO } from "@/dtos/prompt/question.dto";

export class QuestionService {
    async ask(question: QuestionDTO): Promise<{ answer: string }> {
        return { answer: 'a' };
    }
}