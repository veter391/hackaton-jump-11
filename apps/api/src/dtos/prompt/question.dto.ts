import { Teacher } from "@/models/prompt/teacher.model";

type Chat = {
    message: string;
    isAnswer: boolean;
}

export interface QuestionDTO {
    teacher: Teacher;
    messages: Chat[];
}