import { Teacher } from "@/models/prompt/teacher.model";

type Chat = {
    content: string;
    role: 'assistant' | 'user';
}

export interface QuestionDTO {
    teacher: Teacher;
    messages: Chat[];
}